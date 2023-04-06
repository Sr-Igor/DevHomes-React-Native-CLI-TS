import styled, { css } from 'styled-components/native';

export const Container = styled.View`
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

export const CoverArea = styled.View`
  ${({ theme }) => css`
    flex: 1;
    width: 100%;
  `}
`;

export const CoverImage = styled.Image`
  ${({ theme }) => css`
    width: 50px;
    height: 50px;
  `}
`;

export const InfosArea = styled.View`
  ${({ theme }) => css`
    flex: 3;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
  `}
`;

export const SpanTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray};
    margin: ${theme.spacings.xxsmall} 0px;
  `}
`;

export const Date = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray};
  `}
`;

export const DelArea = styled.TouchableOpacity``;
