import * as S from './styled';
import { formatedBallDay } from './actions';

type DayProps = {
  day: number;
  month: number;
  dailyProgress: string[];
  workoutDays: number[];
  onPress: () => void;
  dayWidth: number;
  isSelected: boolean;
};

const Day = ({
  day,
  month,
  dailyProgress,
  workoutDays,
  onPress,
  dayWidth,
  isSelected
}: DayProps) => {
  const styleBall = formatedBallDay(day, month, dailyProgress, workoutDays);

  return (
    <S.Container width={`${dayWidth}px`} onPress={onPress} underlayColor="none">
      <S.DayBall background={styleBall.backgroundColor} isSelected={isSelected}>
        <S.Day>{day}</S.Day>
      </S.DayBall>
    </S.Container>
  );
};

export default Day;
