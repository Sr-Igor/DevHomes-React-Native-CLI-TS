import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableHighlight`
  ${({ theme }) => css`
    flex-direction: row;
    margin-bottom: ${theme.spacings.xsmall};
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
    color: ${theme.colors.white};
  `}
`;

export const ExerciseDescription = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray};
  `}
`;

export const ExerciseCheck = styled.View`
  ${({ theme }) => css`
    width: 30px;
    height: 30px;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.border.circle};
    border: 3px solid ${theme.colors.secondary};
  `}
`;

export const Ball = styled.View<{ done: boolean }>`
  ${({ theme, done }) => css`
    width: 15px;
    height: 15px;
    border-radius: ${theme.border.circle};
    background-color: ${done ? theme.colors.secondary : 'transparent'};
  `}
`;
