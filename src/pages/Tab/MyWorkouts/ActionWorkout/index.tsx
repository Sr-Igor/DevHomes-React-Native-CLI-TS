//Styled
import * as S from './styled';

//React
import { useLayoutEffect, useState } from 'react';
import { setUserWorkouts } from 'store/reducers/user/actions';
import { useAppSelector, useAppDispatch } from 'hooks/redux-hook';
import { useNavigation, useRoute } from '@react-navigation/native';

//Components
import Modal from 'components/Modal';
import DefaultButton from 'components/Button';
import ExerciceItem from 'components/Exercise';
import HeaderButton from 'components/HeaderButton';

//Utils
import { muscles } from 'utils/constants';
import { formatMuscleImage } from 'utils/formatMuscleImage';

//Types
import { User } from 'types/user';
import { Exercise as ExerciseType } from 'types/workout';
import { StackScreenRouteProp, StackScreenNavigationProp } from 'types/MyWorkouts';

const ActionWorkout = () => {
  //Hooks
  const route = useRoute<StackScreenRouteProp>();
  const navigation = useNavigation<StackScreenNavigationProp>();

  //Redux
  const user: User = useAppSelector((state) => state.profile);
  const workout = user.myWorkouts.find((workout) => workout.id === route.params?.id);
  const dispatch = useAppDispatch();

  //Form States
  const [name, setName] = useState(workout?.name || '');
  const [exercices, setExercices] = useState(workout?.exercises || []);
  const [modalVisible, setModalVisible] = useState(false);
  const [editableExercise, setEditableExercise] = useState<ExerciseType | null>(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params?.id ? 'Editar treino' : 'Criar treino',
      headerRight: () => <HeaderButton text="Salvar" onPress={() => handleSaveWorkout()} />
    });
  }, [navigation, route.params?.id, exercices, editableExercise, name]);

  const editAction = (exercise: ExerciseType) => {
    setEditableExercise(exercise);
    setModalVisible(true);
  };

  const delAction = (exercise: ExerciseType) => {
    const newExercices = exercices.filter((item) => item.id !== exercise.id);
    setExercices(newExercices);
  };

  const handleEditExercise = (key: string, value: string) => {
    if (editableExercise) {
      setEditableExercise({ ...editableExercise, [key]: value });
    } else {
      setEditableExercise({
        name: '',
        muscle: '',
        [key]: value
      });
    }
  };

  const hanldeSaveExercise = () => {
    if (!editableExercise?.name || !editableExercise?.muscle) {
      alert('Preencha todos os campos!');
      return;
    }

    if (editableExercise?.id) {
      const newExercices = exercices.map((item) => {
        if (item.id === editableExercise?.id) {
          return editableExercise;
        }
        return item;
      });
      setExercices(newExercices);
    } else {
      const newExercices = [
        ...exercices,
        { ...(editableExercise as ExerciseType), id: Math.ceil(Math.random() * 100) }
      ];
      setExercices(newExercices);
    }
    setEditableExercise(null);
    setModalVisible(false);
  };

  const handleSaveWorkout = () => {
    if (!name) {
      alert('Preencha todos os campos!');
      return;
    }

    if (route.params?.id) {
      let newWorkouts = [...user.myWorkouts];
      newWorkouts = newWorkouts.map((item) => {
        if (item.id === route.params?.id) {
          return { ...item, name, exercises: exercices };
        }
        return item;
      });
      dispatch(setUserWorkouts(newWorkouts));
    } else {
      const newWorkout = {
        id: Math.ceil(Math.random() * 100),
        name,
        exercises: exercices
      };
      const newWorkouts = [...user.myWorkouts, newWorkout];
      dispatch(setUserWorkouts(newWorkouts));
    }
    navigation.goBack();
  };

  return (
    <>
      <S.Container>
        <S.InputName
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="Digite o do treino"
        />
        <DefaultButton text="Adicionar exercício" onPress={() => setModalVisible(true)} />

        <S.ExerciceArea
          data={exercices as ExerciseType[]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <ExerciceItem
              exercise={item as ExerciseType}
              editAction={editAction}
              delAction={delAction}
            />
          )}
        />
      </S.Container>
      <Modal
        isOpen={modalVisible}
        onClose={() => {
          setEditableExercise(null);
          setModalVisible(false);
        }}
      >
        <S.Label>Selecione o músculo:</S.Label>
        <S.MusclesArea horizontal showsHorizontalScrollIndicator={false}>
          {muscles.map((muscle, index) => (
            <S.Muscle
              key={index}
              selected={editableExercise?.muscle === muscle}
              onPress={() => handleEditExercise('muscle', muscle)}
              underlayColor="transparent"
            >
              <S.MuscleImage source={formatMuscleImage(muscle)} />
            </S.Muscle>
          ))}
        </S.MusclesArea>
        <S.TrainningArea>
          <S.Label>Nome do exercício:</S.Label>
          <S.TrainningTitle
            value={editableExercise?.name}
            onChangeText={(t) => handleEditExercise('name', t)}
          />
        </S.TrainningArea>
        <S.TrainningInfoArea>
          <S.TrainningArea>
            <S.Label>Series:</S.Label>
            <S.TrainningTitle
              value={editableExercise?.sets?.toString()}
              onChangeText={(t) => handleEditExercise('sets', t)}
              keyboardType="numeric"
            />
          </S.TrainningArea>
          <S.TrainningArea>
            <S.Label>Repetições:</S.Label>
            <S.TrainningTitle
              value={editableExercise?.reps?.toString()}
              onChangeText={(t) => handleEditExercise('reps', t)}
              keyboardType="numeric"
            />
          </S.TrainningArea>
          <S.TrainningArea>
            <S.Label>Carga:</S.Label>
            <S.TrainningTitle
              value={editableExercise?.load?.toString()}
              onChangeText={(t) => handleEditExercise('load', t)}
              keyboardType="numeric"
            />
          </S.TrainningArea>
        </S.TrainningInfoArea>
        <S.SaveArea>
          <DefaultButton
            text={editableExercise?.id ? 'Editar exercício' : 'Adicionar exercício'}
            onPress={() => hanldeSaveExercise()}
          />
        </S.SaveArea>
      </Modal>
    </>
  );
};

export default ActionWorkout;
