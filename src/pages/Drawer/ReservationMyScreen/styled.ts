import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
  `}
`;

export const ReservationList = styled.FlatList``;
