import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.lightGray};
    align-items: center;
    padding: ${theme.spacings.xxsmall};
    border-radius: ${theme.border.radius};
    border: 1px solid ${theme.colors.gray};
    margin-top: ${theme.spacings.xsmall};
    flex-direction: row;
    height: 105px;
  `}
`;

export const WorkoutInfo = styled.View`
  ${({ theme }) => css`
    flex: 1;
    margin-left: ${theme.spacings.xsmall};
  `};
`;
export const WorkoutTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.darkGray};
    font-weight: ${theme.font.bold};
  `};
`;

export const MuscleScroll = styled.ScrollView`
  ${({ theme }) => css`
    margin: ${theme.spacings.xsmall} 0px;
  `}
`;

export const MuscleGroup = styled.View`
  ${({ theme }) => css`
    width: 40px;
    height: 40px;
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.red};
    margin-right: ${theme.spacings.xxsmall};
    justify-content: center;
    align-items: center;
  `}
`;

export const MuscleImage = styled.Image`
  width: 35px;
  height: 35px;
`;

export const WorkoutActions = styled.View``;

export const WorkoutButton = styled.TouchableHighlight`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.xxsmall};
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
  `}
`;

export const WorkoutButtonImage = styled.Image`
  width: 15px;
  height: 15px;
`;
