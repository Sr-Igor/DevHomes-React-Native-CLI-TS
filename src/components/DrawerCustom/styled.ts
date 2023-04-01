import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    justify-content: space-between;
  `}
`;

export const LogoArea = styled.View`
  ${({ theme }) => css`
    width: 100%;
    border-bottom-width: 2px;
    border-bottom-color: ${theme.colors.lightGray};
    padding: ${theme.spacings.xxsmall} 0px;
  `}
`;

export const Logo = styled.Image`
  width: 100%;
  height: 40px;
`;

export const ListOptions = styled.ScrollView`
  ${({ theme }) => css`
    flex: 1;
    width: 100%;
    margin-top: ${theme.spacings.small};
  `}
`;

export const Item = styled.TouchableOpacity<{ isSelected: boolean }>`
  ${({ theme, isSelected }) => css`
    flex-direction: row;
    height: 50px;
    width: 100%;
    align-items: center;
    /* padding-left: ${theme.spacings.xsmall}; */
    background-color: ${isSelected ? theme.colors.buttonBackground : 'transparent'};
  `}
`;

export const BarSelected = styled.View<{ isSelected: boolean }>`
  ${({ theme, isSelected }) => css`
    width: 5px;
    height: 100%;
    background-color: ${isSelected ? theme.colors.button : 'transparent'};
    margin-right: ${theme.spacings.xsmall};
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  `}
`;

export const ItemText = styled.Text<{ isSelected: boolean }>`
  ${({ theme, isSelected }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${isSelected ? theme.colors.button : theme.colors.darkGray};
    font-weight: ${theme.font.bold};
    margin-left: ${theme.spacings.xxsmall};
  `}
`;

export const UnityArea = styled.View``;

export const FooterArea = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding: 15px 10px;
`;

export const FooterInfos = styled.View``;

export const UserText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.darkGray};
    font-weight: ${theme.font.bold};
  `}
`;

export const FooterInfosText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray};
    font-weight: ${theme.font.light};
  `}
`;

export const ButtonConfig = styled.TouchableOpacity``;
