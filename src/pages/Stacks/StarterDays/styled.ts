import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.lightBg};
    align-items: center;
    padding: 0px ${theme.spacings.medium};
  `}
`;

export const DaysArea = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
    margin-top: ${theme.spacings.medium};
    gap: ${theme.spacings.xxsmall};
  `}
`;
