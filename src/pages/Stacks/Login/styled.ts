import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.lightBg};
    padding: 0px ${theme.spacings.medium};
    align-items: center;
    justify-content: center;
  `}
`;

export const TiltedArea = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
  `}
`;

export const TitleBold = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.huge};
  `}
`;

export const TitleViolet = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.huge};
    color: ${theme.colors.button};
  `}
`;

export const ImageArea = styled.View`
  width: 100%;
`;

export const ImageItem = styled.Image`
  height: 250px;
  width: 100%;
`;

export const InputField = styled.TextInput`
  ${({ theme }) => css`
    width: 100%;
    height: 50px;
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.white};
    padding: 0px ${theme.spacings.small};
    margin-bottom: ${theme.spacings.small};
    border: 1px solid ${theme.colors.lightGray};
  `}
`;

export const NewUserArea = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    margin-top: ${theme.spacings.small};
  `}
`;

export const BoldText = styled.Text`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
  `}
`;

export const TouchButton = styled.TouchableHighlight`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.xxsmall};
  `}
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.button};
    font-weight: ${theme.font.bold};
  `}
`;
