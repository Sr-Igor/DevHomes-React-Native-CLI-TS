//Styled
import * as S from './styled';

//React
import { useEffect, useState } from 'react';

//Types
import { Workout } from 'types/workout';

//Actions
import { formatMuscleImage } from 'utils/formatMuscleImage';

export type WorkoutItemProps = {
  data: Workout;
  onPress: (data: Workout) => void;
  onDelete?: (data: Workout) => void;
  userWorkouts: Workout[];
  isEditable?: boolean;
  isAction?: boolean;
};

const WorkoutItem = ({
  data,
  onPress,
  userWorkouts,
  isEditable,
  onDelete,
  isAction
}: WorkoutItemProps) => {
  const [included, setIncluded] = useState(false);
  const [muslceGroups, setMuscleGroups] = useState<string[]>([]);

  useEffect(() => {
    userWorkouts.map((item) => {
      if (item.id === data.id) {
        setIncluded(true);
      }
    });

    const muslceGp: string[] = [];
    for (const i in data.exercises) {
      if (!muslceGp.includes(data.exercises[i].muscle)) {
        muslceGp.push(data.exercises[i].muscle);
      }
    }
    setMuscleGroups(muslceGp);
  }, [data]);

  const toggleItem = () => {
    if (!isEditable) setIncluded(!included);
    onPress(data);
  };

  return (
    <S.Container>
      <S.WorkoutInfo>
        <S.WorkoutTitle>{data.name}</S.WorkoutTitle>
        <S.MuscleScroll horizontal showsHorizontalScrollIndicator={false}>
          {muslceGroups.map((item, index) => (
            <S.MuscleGroup key={index}>
              {<S.MuscleImage source={formatMuscleImage(item)} />}
            </S.MuscleGroup>
          ))}
        </S.MuscleScroll>
      </S.WorkoutInfo>

      <S.WorkoutActions>
        <S.WorkoutButton onPress={() => toggleItem()} underlayColor="none">
          <>
            {!isEditable && !isAction && (
              <S.WorkoutButtonImage
                source={!included ? require('assets/add.png') : require('assets/check-black.png')}
              />
            )}
            {isEditable && !isAction && (
              <S.WorkoutButtonImage source={require('assets/edit-black.png')} />
            )}
            {isAction && <S.WorkoutButtonImage source={require('assets/play-black.png')} />}
          </>
        </S.WorkoutButton>
        {isEditable && onDelete && (
          <S.WorkoutButton onPress={() => onDelete(data)} underlayColor="none">
            <S.WorkoutButtonImage source={require('assets/trash-black.png')} />
          </S.WorkoutButton>
        )}
      </S.WorkoutActions>
    </S.Container>
  );
};

export default WorkoutItem;
