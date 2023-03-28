import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableHighlight<{ width: string }>`
  ${({ width }) => css`
    width: ${width};
    justify-content: center;
    align-items: center;
  `}
`;

export const DayBall = styled.View<{ background: string; isSelected: boolean }>`
  ${({ theme, background, isSelected }) => css`
    width: ${isSelected ? '40px' : '30px'};
    height: ${isSelected ? '40px' : '30px'};
    border-radius: ${theme.border.circle};
    background-color: ${background};
    justify-content: center;
    align-items: center;
  `}
`;

export const Day = styled.Text`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.darkGray};
  `}
`;
