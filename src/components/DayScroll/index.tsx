//Styles
import * as S from './styled';

//React
import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native/types';
import { useRef, useEffect, useState } from 'react';

//Types
import { NativeSyntheticEvent } from 'react-native/Libraries/Types/CoreEventTypes';
import { NativeScrollEvent } from 'react-native/Libraries/Components/ScrollView/ScrollView';

//Components
import Day from 'components/Day';

type DayScrollProps = {
  selectedMonth: number;
  selectedDay: number;
  setSelectedDay: (day: number) => void;
  dailyProgress: string[];
  workoutDays: number[];
};

const screenWidth = Math.round(Dimensions.get('window').width);
const dayW = Math.floor(screenWidth / 9);
const offSetW = Math.round((screenWidth - dayW) / 2);

const DayScroll = ({
  selectedMonth,
  selectedDay,
  setSelectedDay,
  dailyProgress,
  workoutDays
}: DayScrollProps) => {
  const DayRef = useRef<ScrollView>(null);
  const [days, setDays] = useState<number[]>([1]);

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / dayW);
    setSelectedDay(index + 1);
  };

  const scrollToDay = (day: number) => {
    const current = DayRef.current;
    current!.scrollTo({
      x: (day - 1) * dayW,
      animated: true
    });
    setSelectedDay(day);
  };

  useEffect(() => {
    if (selectedMonth !== new Date().getMonth()) {
      scrollToDay(1);
    } else {
      scrollToDay(new Date().getDate());
    }
    const total = [];
    const daysInMonth = new Date(new Date().getFullYear(), selectedMonth + 1, 0).getDate();
    for (let i = 1; i <= daysInMonth; i++) {
      total.push(i);
    }

    setDays(total);
  }, [selectedMonth]);

  return (
    <S.Container
      horizontal
      ref={DayRef}
      showsHorizontalScrollIndicator={false}
      decelerationRate="fast"
      snapToInterval={dayW}
      onMomentumScrollEnd={handleScroll}
      contentContainerStyle={{
        paddingHorizontal: offSetW
      }}
    >
      {days.map((day, index) => (
        <Day
          key={index}
          day={day}
          month={selectedMonth}
          dailyProgress={dailyProgress}
          workoutDays={workoutDays}
          onPress={() => scrollToDay(day)}
          dayWidth={dayW}
          isSelected={day === selectedDay}
        />
      ))}
    </S.Container>
  );
};

export default DayScroll;
