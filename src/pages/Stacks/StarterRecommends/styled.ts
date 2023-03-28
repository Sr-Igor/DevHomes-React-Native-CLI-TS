import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.lightBg};
    align-items: center;
    padding: 0px ${theme.spacings.medium};
  `}
`;

export const WorkoutList = styled.FlatList`
  ${({ theme }) => css`
    width: 100%;
  `}
`;
