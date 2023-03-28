import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableHighlight`
  ${({ theme }) => css`
    flex-direction: row;
    margin-bottom: ${theme.spacings.xxsmall};
    background-color: ${theme.colors.lightBg};
    height: 45px;
  `}
`;

export const MuscleArea = styled.View`
  ${({ theme }) => css`
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.red};
    margin-right: ${theme.spacings.xxsmall};
  `}
`;

export const MuscleImage = styled.Image`
  width: 35px;
  height: 35px;
`;

export const ExerciseInfo = styled.View`
  flex: 1;
`;

export const ExerciseName = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
  `}
`;

export const ExerciseDescription = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray};
  `}
`;

export const ExerciseSwipe = styled.TouchableHighlight`
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background-color: #ff0000;
  margin-left: 85%;
`;

export const ExerciseSwipeIcon = styled.Image`
  width: 20px;
  height: 20px;
`;
