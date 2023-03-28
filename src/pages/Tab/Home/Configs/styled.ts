import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
  ${({ theme }) => css`
    padding: 0px ${theme.spacings.medium};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.darkGray};
    margin-top: ${theme.spacings.medium};
  `}
`;

export const InputName = styled.TextInput`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    border: 1px solid ${theme.colors.gray};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    margin-top: ${theme.spacings.xxsmall};
  `}
`;

export const List = styled.SafeAreaView`
  ${({ theme }) => css`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    margin-top: ${theme.spacings.xxsmall};
  `}
`;

export const Day = styled.TouchableHighlight<{ selected: boolean }>`
  ${({ theme, selected }) => css`
    width: 35px;
    height: 35px;
    border-radius: ${theme.border.radius};
    justify-content: center;
    align-items: center;
    background-color: ${!selected ? theme.colors.lightGray : theme.colors.red};
  `}
`;

export const DayText = styled.Text<{ selected: boolean }>`
  ${({ theme, selected }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    color: ${!selected ? theme.colors.black : theme.colors.white};
  `}
`;

export const LevelItem = styled.TouchableHighlight<{ selected: boolean }>`
  ${({ theme, selected }) => css`
    border-radius: ${theme.border.radius};
    justify-content: center;
    align-items: center;
    background-color: ${!selected ? theme.colors.lightGray : theme.colors.red};
    padding: ${theme.spacings.xxsmall};
  `}
`;

export const LevelItemText = styled.Text<{ selected: boolean }>`
  ${({ theme, selected }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    color: ${!selected ? theme.colors.black : theme.colors.white};
  `}
`;

export const ResetButton = styled.TouchableHighlight`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    justify-content: center;
    height: 50px;
    align-items: center;
    background-color: ${theme.colors.red};
    padding: ${theme.spacings.xxsmall};
    margin-top: ${theme.spacings.xxlarge};
  `}
`;

export const ResetButtonText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
  `}
`;
