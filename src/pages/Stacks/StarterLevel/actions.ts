export const formatTitle = (qt: number) => {
  switch (qt) {
    case 1:
      return 'Um dia é muito pouco...';
    case 2:
      return 'Dois dias pra começar ta bom ne?!';
    case 3:
      return 'Hmmm... 3 dias é um bom começo!';
    case 4:
      return 'Olha só, quanta disposição!';
    case 5:
      return 'O shape vem facil com 5 dias!';
    case 6:
      return 'Descansar um dia só? Vai ser dificil!';
    case 7:
      return 'Sem falhar nem um dia? Quero só ver!';
    default:
      return 'Ops! Ocorreu um erro ao identificar a quantidade de dias';
  }
};
