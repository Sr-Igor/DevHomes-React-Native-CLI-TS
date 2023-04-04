import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView``;

// export const ButtonTopArea = styled.View`
//   ${({ theme }) => css`
//     position: absolute;
//     top: 0;
//     width: 100%;
//   `}
// `;

export const ScrollSpace = styled.ScrollView`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxlarge};
    padding: ${theme.spacings.xxsmall};
  `}
`;

// export const SpaceArea = styled.TouchableOpacity`
//   ${({ theme }) => css`
//     border: 1px solid ${theme.colors.gray};
//     border-radius: ${theme.border.radius};
//     margin-bottom: ${theme.spacings.small};
//   `}
// `;

export const SpaceImage = styled.Image`
  ${({ theme }) => css`
    width: 100%;
    height: 200px;
    /* border-radius: ${theme.border.radius}; */
  `}
`;

export const Loading = styled.ActivityIndicator`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.huge};
  `}
`;

export const CalendarArea = styled.View`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxsmall};
  `}
`;

// export const TextBox = styled.View`
/* ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall};
  `}
`;

export const SpaceTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`;

export const SpaceDescription = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.gray};
    margin-bottom: ${theme.spacings.xxsmall};
    font-weight: ${theme.font.bold};
  `}
`;

export const DateLine = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.black};
    margin-bottom: ${theme.spacings.xxsmall};
    font-weight: ${theme.font.bold};
  `}
`; */
