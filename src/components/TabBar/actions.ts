export const iconGenerate = (route: string) => {
  switch (route) {
    case 'HomeStack':
      return require('assets/home.png');
    case 'WorkoutStack':
      return require('assets/dumbbell.png');
    case 'MyWorkoutStack':
      return require('assets/myworkouts.png');
    default:
      return 'home';
  }
};
