import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightBg};
  `}
`;

export const LegendArea = styled.View`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium};
  `}
`;

export const LegendText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`;

export const LegendItem = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`;

export const LegendBox = styled.View<{ bgColor: string }>`
  ${({ theme, bgColor }) => css`
    width: 20px;
    height: 20px;
    border-radius: ${theme.border.radius};
    margin-right: ${theme.spacings.xxsmall};
    background-color: ${bgColor};
  `}
`;

export const LegendTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.darkGray};
  `}
`;
