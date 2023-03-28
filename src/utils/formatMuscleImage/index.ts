export const formatMuscleImage = (muscle: string) => {
  switch (muscle) {
    case 'chest':
      return require('assets/muscles/chest.png');
    case 'biceps':
      return require('assets/muscles/biceps.png');
    case 'triceps':
      return require('assets/muscles/triceps.png');
    case 'back':
      return require('assets/muscles/back.png');
    case 'shoulders':
      return require('assets/muscles/shoulders.png');
    case 'legs':
      return require('assets/muscles/legs.png');
    case 'abs':
      return require('assets/muscles/abs.png');
    case 'gluteos':
      return require('assets/muscles/gluteos.png');
    default:
      return require('assets/muscles/abs.png');
  }
};
