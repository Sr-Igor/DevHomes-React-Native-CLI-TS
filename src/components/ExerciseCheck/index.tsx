//Styled
import * as S from './styled';

//Components
import { formatMuscleImage } from 'utils/formatMuscleImage';

//Types
import { Exercise as ExerciseType } from 'types/workout';

type ExerciseProps = {
  exercise: ExerciseType;
  onPress: (exercise: ExerciseType) => void;
};

const ExerciseCheck = ({ exercise, onPress }: ExerciseProps) => {
  return (
    <S.Container onPress={() => onPress(exercise)} underlayColor="none">
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
        <S.ExerciseCheck>
          <S.Ball done={!!exercise?.done}></S.Ball>
        </S.ExerciseCheck>
      </>
    </S.Container>
  );
};

export default ExerciseCheck;
