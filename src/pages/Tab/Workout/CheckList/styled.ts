import styled, { css } from 'styled-components/native';

export const Background = styled.ImageBackground`
  flex: 1;
`;

export const Container = styled.SafeAreaView`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.blackOpacity};
    width: 100%;
    padding: ${theme.spacings.small};
  `}
`;

export const WorkouHeader = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: ${theme.spacings.xsmall};
    height: 40px;
  `}
`;

export const WorkoutTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
  `}
`;

export const WorkoutClose = styled.View`
  ${({ theme }) => css`
    align-items: center;
    justify-content: center;
  `}
`;

export const WorkoutList = styled.FlatList`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
  `}
`;
