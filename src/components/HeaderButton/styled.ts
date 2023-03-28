import styled, { css } from 'styled-components/native';

export const ButtonArea = styled.TouchableHighlight``;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-weight: ${theme.font.bold};
  `}
`;
