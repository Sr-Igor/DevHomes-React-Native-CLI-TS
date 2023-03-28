//Styled
import * as S from './styled';

//React
import { useEffect, useState } from 'react';

//Components
import DefaultButton from 'components/Button';

//Utils
import { formatDate } from 'utils/formatDate';
import { endToDate } from 'utils/formatDate';

//Actions
import { BallonConfigs, formatBallon } from './actions';

type DayStatus = {
  selectedMonth: number;
  selectedDay: number;
  dailyProgress: string[];
  workoutDays: number[];
  handleDailyProgress: (date: string) => void;
  goToWorkout: () => void;
};

const DayStatus = ({
  selectedMonth,
  selectedDay,
  dailyProgress,
  workoutDays,
  handleDailyProgress,
  goToWorkout
}: DayStatus) => {
  const [stringfyDate, setStringfyDate] = useState<string>('');
  const [configs, setConfigs] = useState<BallonConfigs>({
    text: '',
    button: '',
    buttonColor: 'ligth'
  });

  useEffect(() => {
    const date = new Date(new Date().getFullYear(), selectedMonth, selectedDay);
    const formatedDate = formatDate(date);
    const format = formatBallon(workoutDays, formatedDate, date, dailyProgress);
    setConfigs(format);
    setStringfyDate(formatedDate);
  }, [selectedDay, dailyProgress]);

  const handlePress = () => {
    if (configs.button === 'Treinar') {
      goToWorkout();
    } else {
      handleDailyProgress(stringfyDate);
    }
  };

  const [timeLeft, setTimeLeft] = useState('');
  useEffect(() => {
    const timerFunc = () => {
      setTimeLeft(endToDate());
    };

    const timer = setInterval(timerFunc, 1000);
    timerFunc();

    return () => clearInterval(timer);
  }, []);

  return (
    <S.Container>
      <S.BallonArrow />
      <S.BallonArea>
        <S.BallonBigText>{configs.text}</S.BallonBigText>
        {configs.isToday && <S.BallonBigText>Tempo restante: {timeLeft}</S.BallonBigText>}
        {configs.button && (
          <DefaultButton
            text={configs.button}
            onPress={handlePress}
            bgColor={configs.buttonColor}
            width={'70%'}
          />
        )}
      </S.BallonArea>
    </S.Container>
  );
};

export default DayStatus;
