import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.lightBg};
    align-items: center;
    padding: 0px ${theme.spacings.medium};
  `}
`;

export const NameInput = styled.TextInput`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.gray};
    width: 100%;
    height: 50px;
    border-radius: ${theme.border.radius};
    margin-top: ${theme.spacings.xxlarge};
    font-size: ${theme.font.sizes.medium};
    padding: 0px ${theme.spacings.xsmall};
  `}
`;

export const ConfigArea = styled.View`
  ${({ theme }) => css`
    width: 100%;
    margin-top: ${theme.spacings.xxlarge};
  `}
`;

export const LevelArea = styled.View`
  ${({ theme }) => css`
    width: 100%;
    gap: ${theme.spacings.small};
    margin-top: ${theme.spacings.large};
  `}
`;
