import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    margin-bottom: ${theme.spacings.xxsmall};
    padding: ${theme.spacings.xsmall};
    border: 2px solid ${theme.colors.button};
    flex-direction: row;
    align-items: center;
  `}
`;

export const TitleWall = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};
    margin-left: ${theme.spacings.xsmall};
  `}
`;
