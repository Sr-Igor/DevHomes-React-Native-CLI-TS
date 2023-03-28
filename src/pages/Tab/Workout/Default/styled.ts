import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
  ${({ theme }) => css`
    padding: 0px ${theme.spacings.xsmall};
  `}
`;

export const WorkoutList = styled.FlatList`
  width: 100%;
`;

export const LastWorkoutArea = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 140px;
    margin-bottom: ${theme.spacings.xsmall};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray};
  `}
`;
