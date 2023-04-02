import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
  ${({ theme }) => css`
    flex: 1;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
  `}
`;

export const WallList = styled.FlatList`
  flex: 1;
`;

export const EmptyWarning = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
export const EmptyWarningImage = styled.Image`
  width: 200px;
  height: 150px;
`;

export const EmptyWarningText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.gray};
    font-weight: ${theme.font.bold};
    margin-top: ${theme.spacings.small};
    text-align: center;
  `}
`;
