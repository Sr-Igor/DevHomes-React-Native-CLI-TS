import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    margin-bottom: ${theme.spacings.xxsmall};
    padding: ${theme.spacings.xsmall};
    border: 8px solid ${theme.colors.gray};
  `}
`;

export const HeaderItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const Infos = styled.View`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.xsmall};
  `}
`;

export const TitleWall = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};
  `}
`;

export const DateWall = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.gray};
    font-weight: ${theme.font.bold};
  `}
`;

export const BodyItem = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    font-weight: ${theme.font.normal};
    margin: ${theme.spacings.xsmall} 0px;
  `}
`;

export const FooterItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LikeButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const ButtonText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.red};
    font-weight: ${theme.font.bold};
    margin-right: ${theme.spacings.xxsmall};
  `}
`;

export const LikeText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.button};
    font-weight: ${theme.font.bold};
  `}
`;
