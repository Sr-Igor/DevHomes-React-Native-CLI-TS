import styled, { css, DefaultTheme } from 'styled-components/native';
import { ButtonProps } from './index';

const ButtonAreaModifiers = {
  ligth: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary};
  `,
  dark: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.mainBg};
  `,
  unfilled: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.gray};
  `,
  selected: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.red};
  `,
  secondary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.secondary};
  `
};

const ButtonTextModifiers = {
  ligth: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
  `,
  dark: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
  `
};

export const ButtonArea = styled.TouchableHighlight<Omit<ButtonProps, 'textColor' | 'text'>>`
  ${({ theme, width, bgColor }) => css`
    width: ${width};
    height: 50px;
    border-radius: ${theme.border.circle};>
    align-items: center;
    justify-content: center;
    padding: 0px ${theme.spacings.medium};
    ${ButtonAreaModifiers[bgColor!](theme)}
  `}
`;

export const ButtonText = styled.Text<Pick<ButtonProps, 'textColor'>>`
  ${({ theme, textColor }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    text-align: center;
    ${ButtonTextModifiers[textColor!](theme)}
  `}
`;
