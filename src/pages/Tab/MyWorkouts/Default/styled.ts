import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView``;

export const WorkoutList = styled.FlatList`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.xsmall};
  `}
`;
