import styled, { css, DefaultTheme } from 'styled-components/native';
import { HeaderButtonProps } from '.';

const ButtonModifiers = {
  blue: (theme: DefaultTheme) => css`
    color: ${theme.colors.primary};
  `,
  purple: (theme: DefaultTheme) => css`
    color: ${theme.colors.button};
  `
};

export const ButtonArea = styled.TouchableHighlight``;

export const ButtonText = styled.Text<Pick<HeaderButtonProps, 'colorText'>>`
  ${({ theme, colorText = 'blue' }) => css`
    font-weight: ${theme.font.bold};
    ${ButtonModifiers[colorText!](theme)};
  `}
`;
