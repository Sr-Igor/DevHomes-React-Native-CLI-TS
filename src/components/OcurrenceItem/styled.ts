import styled, { css } from 'styled-components/native';

export const Container = styled.View<{ colorBox: string }>`
  ${({ theme, colorBox }) => css`
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    margin-bottom: ${theme.spacings.xxsmall};
    padding: ${theme.spacings.xsmall};
    border: 2px solid ${colorBox};
    /* flex-direction: row; */
    align-items: flex-start;
  `}
`;

export const Date = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.gray};
    font-weight: ${theme.font.bold};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};
    margin-top: ${theme.spacings.xxsmall};
  `}
`;

export const StatusBox = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
    margin-top: ${theme.spacings.xxsmall};
  `}
`;

export const StatusText = styled.Text<{ colorText: string }>`
  ${({ theme, colorText }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${colorText};
    font-weight: ${theme.font.bold};
    margin-left: ${theme.spacings.xxsmall};
  `}
`;

export const PhotosArea = styled.ScrollView`
  ${({ theme }) => css`
    flex: 1;
    margin-top: ${theme.spacings.xxsmall};
  `}
`;

export const PhotoItem = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 50px;
    height: 50px;
    margin-right: ${theme.spacings.xxsmall};
  `}
`;

export const Photo = styled.Image`
  ${({ theme }) => css`
    width: 50px;
    height: 50px;
    border-radius: ${theme.border.radius};
  `}
`;

export const ModalArea = styled.View`
  ${({ theme }) => css`
    /* flex: 1; */
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  `}
`;

export const ModalImage = styled.Image`
  ${({ theme }) => css`
    width: 100%;
    height: 300px;
  `}
`;
