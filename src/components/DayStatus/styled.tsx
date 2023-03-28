import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

export const BallonArrow = styled.View`
  ${({ theme }) => css`
    width: 0;
    height: 0;

    border-left-color: transparent;
    border-left-width: 15px;

    border-right-color: transparent;
    border-right-width: 15px;

    border-bottom-color: ${theme.colors.red};
    border-bottom-width: 15px;
  `}
`;

export const BallonArea = styled.View`
  ${({ theme }) => css`
    width: 90%;
    padding: ${theme.spacings.small};
    background-color: ${theme.colors.lightGray};
    border-radius: ${theme.border.radius};
    align-items: center;
    justify-content: center;
    min-height: 100px;
    border: 2px solid ${theme.colors.red};
  `}
`;

export const BallonBigText = styled.Text`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};
  `}
`;
