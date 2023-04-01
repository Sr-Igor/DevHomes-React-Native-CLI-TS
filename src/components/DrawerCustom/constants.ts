import { Menu } from 'types/Menu';

export const menus: Menu[] = [
  {
    id: 2,
    title: 'Mural de Avisos',
    icon: 'inbox',
    screen: 'WallScreen'
  },
  {
    id: 3,
    title: 'Documentos',
    icon: 'file-text',
    screen: 'DocumentsScreen'
  },
  {
    id: 4,
    title: 'Reservas',
    icon: 'calendar',
    screen: 'ReservationScreen'
  },
  {
    id: 5,
    title: 'Ocorrências',
    icon: 'bug',
    screen: 'WarningScreen'
  },
  {
    id: 6,
    title: 'Achados e Perdidos',
    icon: 'search',
    screen: 'FoundAndLostScreen'
  },
  {
    id: 7,
    title: 'Boletos',
    icon: 'wpforms',
    screen: 'BilletScreen'
  },
  {
    id: 8,
    title: 'Perfil',
    icon: 'user',
    screen: 'ProfileScreen'
  }
];
