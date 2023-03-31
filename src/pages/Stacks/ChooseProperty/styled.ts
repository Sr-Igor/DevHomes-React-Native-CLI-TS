import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.lightBg};
    padding: 20px ${theme.spacings.medium};
    align-items: center;
    justify-content: flex-start;
  `}
`;

export const TiltedArea = styled.View`
  flex-direction: row;
`;

export const TitleBold = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
  `}
`;

export const TitleViolet = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.button};
  `}
`;

export const ImageArea = styled.View`
  width: 100%;
`;

export const ImageItem = styled.Image`
  height: 100px;
  width: 100%;
`;

export const HeaderArea = styled.View`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    align-items: center;
    flex: 1;
    width: 100%;
  `}
`;

export const HeaderTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.button};
  `}
`;

export const HeaderDescription = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.gray};
    margin-top: ${theme.spacings.xxsmall};
  `}
`;

export const InformationBox = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 300px;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.small};
    margin-top: ${theme.spacings.medium};
    border: 1px solid ${theme.colors.button};
    justify-content: space-between;
    align-items: center;
  `}
`;

export const InformationBoxTitle = styled.Text`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.button};
  `}
`;

export const InformationBoxDescription = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.gray};
    text-align: center;
  `}
`;

export const InformationBoxImageArea = styled.View`
  width: 100%;
`;

export const InformationBoxImage = styled.Image`
  height: 100px;
  width: 100%;
  margin: 30px 0px;
`;

export const InformationBoxRules = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.gray};
    text-align: center;
  `}
`;

export const BottomArea = styled.View`
  width: 100%;
`;

export const LoadingArea = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LoadingIcon = styled.ActivityIndicator``;

export const HouseList = styled.FlatList`
  width: 100%;
  flex: 6;
`;

export const BoxHome = styled.TouchableOpacity<{ isSelected: boolean }>`
  ${({ theme, isSelected }) => css`
    width: 50%;
    height: 130px;
    justify-content: center;
    align-items: center;
    border: 1px solid ${theme.colors.button};
    border-radius: ${theme.border.radius};
    background-color: ${!isSelected ? theme.colors.lightGray : theme.colors.button};
    box-shadow: 0px 0px 5px ${theme.colors.button};
  `}
`;

export const BoxImage = styled.View`
  width: 100%;
`;

export const HomeImage = styled.Image`
  height: 50px;
  width: 100%;
  margin: 30px 0px;
`;

export const HomeName = styled.Text<{ isSelected: boolean }>`
  ${({ theme, isSelected }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${!isSelected ? theme.colors.darkGray : theme.colors.lightBg};
    text-align: center;
    font-weight: ${theme.font.bold};
  `}
`;
