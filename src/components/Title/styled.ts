import styled, { css } from 'styled-components/native';
import { DefaultTitleProps } from './index';

export const Title = styled.Text<Pick<DefaultTitleProps, 'noMargin' | 'small'>>`
  ${({ theme, noMargin, small }) => css`
    font-size: ${!small ? theme.font.sizes.xlarge : theme.font.sizes.small};
    color: ${theme.colors.black};
    margin-top: ${!noMargin ? theme.spacings.xlarge : 0};
    font-weight: ${!small ? theme.font.bold : theme.font.normal}};
  `}
`;
