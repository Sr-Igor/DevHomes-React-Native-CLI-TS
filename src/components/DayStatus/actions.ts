import { isSameDay } from 'date-fns';

export type BallonConfigs = {
  text: string;
  button: string;
  buttonColor: 'ligth' | 'dark' | 'unfilled' | 'selected' | 'secondary';
  isToday?: boolean;
  isDone?: boolean;
  isFeature?: boolean;
  dayOff?: boolean;
};

export const formatBallon = (
  workoutDays: number[],
  formatedDate: string,
  date: Date,
  dailyProgress: string[]
) => {
  let dayOff = false;
  let isFeature = false;
  let isDone = false;
  const today = new Date();

  const configsFormat: BallonConfigs = {
    text: '',
    button: '',
    buttonColor: 'ligth'
  };

  if (!workoutDays?.includes(date.getDay())) {
    //Is day off
    dayOff = true;
    configsFormat.text = 'Dia de descanso!';
    configsFormat.dayOff = true;
  } else if (date.getTime() > today.getTime()) {
    //Is tomorrow
    isFeature = true;
    configsFormat.text = 'Treino no futuro!';
    configsFormat.isFeature = true;
  } else {
    if (dailyProgress?.includes(formatedDate)) {
      //Is done
      isDone = true;
      configsFormat.text = 'Treino realizado!';
      configsFormat.button = 'Desmarcar';
      configsFormat.isDone = true;
    } else {
      isDone = false;
      configsFormat.text = 'Treino não realizado!';
      configsFormat.button = 'Marcar';
      configsFormat.buttonColor = 'selected';
      configsFormat.isDone = false;
    }
  }

  if (isSameDay(date, today) && !dayOff && !isDone && !isFeature) {
    configsFormat.text = 'Dia de treino!';
    configsFormat.button = 'Treinar';
    configsFormat.buttonColor = 'secondary';
    configsFormat.isToday = true;
  }

  return configsFormat;
};
