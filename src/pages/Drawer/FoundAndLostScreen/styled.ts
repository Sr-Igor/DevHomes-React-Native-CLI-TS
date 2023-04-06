import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
  ${({ theme }) => css`
    flex: 1;
  `}
`;

export const Scroller = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

export const EmptyArea = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const EmptyImage = styled.Image`
  width: 200px;
  height: 150px;
`;

export const EmptyText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.gray};
    font-weight: ${theme.font.bold};
    margin-top: ${theme.spacings.small};
    text-align: center;
  `}
`;

export const Loadingbox = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const Loading = styled.ActivityIndicator``;

export const TitleList = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};
    flex: 1;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
  `}
`;

export const ListItems = styled.FlatList`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
  `}
`;
