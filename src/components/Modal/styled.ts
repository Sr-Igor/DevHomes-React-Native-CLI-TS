import styled, { css } from 'styled-components/native';

export const Modal = styled.Modal``;

export const ModalContainer = styled.KeyboardAvoidingView`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.blackOpacity};
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  `}
`;

export const ModalCloser = styled.TouchableOpacity`
  align-self: flex-end;
  height: 40px;
  position: absolute;
  z-index: 2;
  top: 0;
  margin-top: 10px;
  margin-right: 20px;
`;

export const CloseText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    margin-right: ${theme.spacings.xxsmall};
    margin-top: ${theme.spacings.xxsmall};
  `}
`;
