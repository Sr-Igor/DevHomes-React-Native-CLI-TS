import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;

export const InputText = styled.TextInput<{ hasError: boolean }>`
  ${({ theme, hasError }) => css`
    width: 100%;
    height: 50px;
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.white};
    padding: 0px ${theme.spacings.small};
    border: 1px solid ${!hasError ? theme.colors.lightGray : theme.colors.red};
  `}
`;

export const Label = styled.Text``;

export const BoxError = styled.View`
  ${({ theme }) => css`
    height: 20px;
  `}
`;

export const ErrorText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    margin-left: ${theme.spacings.xxsmall};
  `}
`;
