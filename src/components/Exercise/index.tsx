//Styled
import * as S from './styled';

//Components
import { formatMuscleImage } from 'utils/formatMuscleImage';

//SwipeLib
import { SwipeRow } from 'react-native-swipe-list-view';

//Types
import { Exercise as ExerciseType } from 'types/workout';

type ExerciseProps = {
  exercise: ExerciseType;
  delAction: (exercise: ExerciseType) => void;
  editAction: (exercise: ExerciseType) => void;
};

const Exercise = ({ exercise, delAction, editAction }: ExerciseProps) => {
  return (
    <SwipeRow rightOpenValue={-58} disableRightSwipe>
      <S.ExerciseSwipe onPress={() => delAction(exercise)} underlayColor="none">
        <S.ExerciseSwipeIcon source={require('assets/trash-white.png')} />
      </S.ExerciseSwipe>
      <S.Container onPress={() => editAction(exercise)} underlayColor="none">
        <>
          <S.MuscleArea>
            <S.MuscleImage source={formatMuscleImage(exercise.muscle)} />
          </S.MuscleArea>
          <S.ExerciseInfo>
            <S.ExerciseName>{exercise.name}</S.ExerciseName>
            <S.ExerciseDescription>
              {exercise.sets && `${exercise.sets} set`} -{exercise.reps && `${exercise.reps} rep`} -
              {exercise.load &&
                `${exercise.load} kg
            `}
            </S.ExerciseDescription>
          </S.ExerciseInfo>
        </>
      </S.Container>
    </SwipeRow>
  );
};

export default Exercise;
