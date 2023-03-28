import { Workout } from 'types/workout';

export const defaultWorkouts: Workout[] = [
  {
    id: 123,
    name: 'Treino Iniciante A1',
    exercises: [
      { id: 1, name: 'Supino Inclinado', muscle: 'chest', sets: 3, reps: 10, load: 20 },
      { id: 2, name: 'Ex 2', muscle: 'biceps', sets: 2, reps: 12, load: 10 }
    ],
    recommendedLevel: 1
  },
  {
    id: 2311,
    name: 'Treino Iniciante A2',
    exercises: [
      { id: 1, name: 'Supino Inclinado', muscle: 'chest', sets: 3, reps: 10, load: 20 },
      { id: 2, name: 'Ex 2', muscle: 'biceps', sets: 2, reps: 12, load: 10 }
    ],
    recommendedLevel: 1
  },
  {
    id: 2312,
    name: 'Treino Iniciante A3',
    exercises: [
      { id: 1, name: 'Supino Inclinado', muscle: 'chest', sets: 3, reps: 10, load: 20 },
      { id: 2, name: 'Ex 2', muscle: 'biceps', sets: 2, reps: 12, load: 10 }
    ],
    recommendedLevel: 1
  },
  {
    id: 2313,
    name: 'Treino Iniciante A4',
    exercises: [
      { id: 1, name: 'Supino Inclinado', muscle: 'chest', sets: 3, reps: 10, load: 20 },
      { id: 2, name: 'Ex 2', muscle: 'biceps', sets: 2, reps: 12, load: 10 }
    ],
    recommendedLevel: 1
  },
  {
    id: 2314,
    name: 'Treino Iniciante A5',
    exercises: [
      { id: 1, name: 'Supino Inclinado', muscle: 'chest', sets: 3, reps: 10, load: 20 },
      { id: 2, name: 'Ex 2', muscle: 'biceps', sets: 2, reps: 12, load: 10 }
    ],
    recommendedLevel: 1
  },
  {
    id: 2315,
    name: 'Treino Iniciante A6',
    exercises: [
      { id: 1, name: 'Supino Inclinado', muscle: 'chest', sets: 3, reps: 10, load: 20 },
      { id: 2, name: 'Ex 2', muscle: 'biceps', sets: 2, reps: 12, load: 10 }
    ],
    recommendedLevel: 1
  },
  {
    id: 456,
    name: 'Treino Intermediario B1',
    exercises: [{ id: 1, name: 'Supino Inclinado', muscle: 'chest', sets: 3, reps: 10, load: 20 }],
    recommendedLevel: 2
  },
  {
    id: 342,
    name: 'Treino Intermediario B2',
    exercises: [{ id: 1, name: 'Supino Inclinado', muscle: 'chest', sets: 3, reps: 10, load: 20 }],
    recommendedLevel: 2
  },
  {
    id: 645,
    name: 'Treino Avançado C',
    exercises: [{ id: 1, name: 'Supino Inclinado', muscle: 'chest', sets: 3, reps: 10, load: 20 }],
    recommendedLevel: 3
  },
  {
    id: 231,
    name: 'Treino Avançado C',
    exercises: [{ id: 1, name: 'Supino Inclinado', muscle: 'chest', sets: 3, reps: 10, load: 20 }],
    recommendedLevel: 3
  }
];
