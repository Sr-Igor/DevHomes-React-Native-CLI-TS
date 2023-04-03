import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
  ${({ theme }) => css`
    flex: 1;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    width: 100%;
    height: 100%;
  `}
`;

export const Scroller = styled.ScrollView``;

export const Title = styled.Text``;

export const PhotoArea = styled.View`
  ${({ theme }) => css`
    width: 100%;
    margin-top: ${theme.spacings.xsmall};
  `}
`;

export const PhotoScroll = styled.ScrollView`
  flex: 1;
  height: 100px;
`;

export const AddButton = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 65px;
    height: 65px;
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.gray};
    justify-content: center;
    align-items: center;
  `}
`;

export const PhotoItem = styled.View`
  ${({ theme }) => css`
    width: 65px;
    border-radius: ${theme.border.radius};
    border: 1px solid ${theme.colors.gray};
    align-items: center;
    margin-left: ${theme.spacings.xxsmall};
  `}
`;

export const Photo = styled.Image`
  ${({ theme }) => css`
    width: 63px;
    height: 63px;
    border-radius: ${theme.border.radius};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`;

export const RemoveButton = styled.TouchableOpacity`
  ${({ theme }) => css``}
`;

export const LoadingIcon = styled.ActivityIndicator``;

export const ButtonArea = styled.View`
  ${({ theme }) => css``}
`;
