import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    /* padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall}; */
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    border: 1px solid ${theme.colors.gray};
    margin-right: ${theme.spacings.small};
    width: 200px;
  `}
`;

export const ImageArea = styled.View`
  ${({ theme }) => css`
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 150px;
  `}
`;

export const Image = styled.Image`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
  `}
`;

export const Box = styled.View`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxsmall};
    padding: ${theme.spacings.xxsmall};
  `}
`;

export const DescriptionText = styled.Text`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxsmall};
    height: 30px;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.darkGray};
    font-weight: ${theme.font.bold};
    margin-left: ${theme.spacings.xxsmall};
  `}
`;

export const InfoText = styled.Text`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray};
    font-weight: ${theme.font.bold};
  `}
`;

export const DataInfo = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.darkGray};
    font-weight: ${theme.font.bold};
  `}
`;

export const MackButton = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 100%;
    height: 50px;
    background-color: ${theme.colors.button};
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `}
`;

export const MackText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    margin-left: ${theme.spacings.xxsmall};
  `}
`;
