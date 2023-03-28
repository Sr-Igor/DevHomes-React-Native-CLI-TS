import styled, { css } from 'styled-components/native';

export const Container = styled.ScrollView`
  width: 100%;
  height: 60px;
`;

export const MonthButton = styled.TouchableHighlight<{ width: number }>`
  ${({ width }) => css`
    width: ${`${width}px`};
    justify-content: center;
    align-items: center;
  `}
`;

export const MonthItem = styled.View<{ selected: boolean }>`
  ${({ theme, selected }) => css`
    width: 90%;
    height: 30px;
    background-color: ${!selected ? theme.colors.red : theme.colors.primary};
    border-radius: ${theme.border.circle};
    align-items: center;
    justify-content: center;
    transition: all ${theme.transition.fast};
  `}
`;

export const MonthText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`;
