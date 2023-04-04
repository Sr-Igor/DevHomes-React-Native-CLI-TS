import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView``;

export const ScrollSpace = styled.ScrollView`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxlarge};
  `}
`;

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

export const BoxHours = styled.View`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxsmall};
    align-items: center;
    padding-bottom: ${theme.spacings.xxsmall};
  `}
`;

export const HoursTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
  `}
`;

export const TimeListArea = styled.View`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxsmall};
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: ${theme.spacings.xxsmall};
    width: 100%;
    align-items: center;
    padding: ${theme.spacings.xxsmall};
    padding-bottom: ${theme.spacings.xsmall};
  `}
`;

export const TimeItem = styled.TouchableHighlight<{ isSelected: boolean }>`
  ${({ theme, isSelected }) => css`
    height: 40px;
    width: 48%;
    padding: ${theme.spacings.xxsmall};
    border: 1px solid ${isSelected ? theme.colors.button : theme.colors.gray};
    border-radius: ${theme.border.radius};
    align-items: center;
    justify-content: center;
    background-color: ${isSelected ? theme.colors.button : theme.colors.white};
  `}
`;

export const TimeText = styled.Text<{ isSelected: boolean }>`
  ${({ theme, isSelected }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    color: ${isSelected ? theme.colors.white : theme.colors.black};
  `}
`;

export const ButtonArea = styled.View`
  height: 50px;
  flex: 1;
  width: 100%;
`;
