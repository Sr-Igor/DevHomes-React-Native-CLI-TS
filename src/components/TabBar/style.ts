import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
  ${({ theme }) => css`
    flex-direction: row;
    background-color: ${theme.colors.lightGray};
  `}
`;

export const Tab = styled.TouchableHighlight`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 55px;
`;

export const MiddleTab = styled.TouchableHighlight<{ isFocused: boolean }>`
  ${({ theme, isFocused }) => css`
    height: 70px;
    width: 70px;
    background-color: ${!isFocused ? theme.colors.red : theme.colors.primary};
    align-items: center;
    justify-content: center;
    margin-top: -30px;
    border-radius: 35px;
  `}
`;

export const Label = styled.Text<{ isFocused: boolean }>`
  ${({ theme, isFocused }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    color: ${!isFocused ? theme.colors.gray : theme.colors.primary};
  `}
`;

export const TabIcon = styled.Image`
  width: 20px;
  height: 20px;
`;

export const TabMiddleIcon = styled.Image`
  width: 40px;
  height: 40px;
`;
