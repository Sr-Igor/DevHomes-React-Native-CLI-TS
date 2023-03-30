import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.lightBg};
    padding: 0px ${theme.spacings.medium};
    align-items: center;
  `}
`;

export const ScrollSreaUser = styled.ScrollView`
  width: 100%;
`;

export const TiltedArea = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TitleBold = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
  `}
`;

export const TitleViolet = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.button};
  `}
`;

export const ImageArea = styled.View`
  ${({ theme }) => css`
    width: 100%;
    margin-bottom: ${theme.spacings.medium};
  `}
`;

export const ImageItem = styled.Image`
  height: 100px;
  width: 100%;
`;

export const keyboardArea = styled.KeyboardAvoidingView`
  width: 100%;
`;

export const NewUserArea = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    margin-top: ${theme.spacings.small};
    align-items: center;
    justify-content: center;
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
