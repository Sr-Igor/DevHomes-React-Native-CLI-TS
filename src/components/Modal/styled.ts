import styled, { css } from 'styled-components/native';

export const Modal = styled.Modal``;

export const ModalContainer = styled.KeyboardAvoidingView`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.blackOpacity};
    justify-content: center;
    align-items: center;
  `}
`;

export const ModalBox = styled.View`
  ${({ theme }) => css`
    width: 90%;
    padding: ${theme.spacings.xsmall};
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
  `}
`;

export const ModalCloser = styled.TouchableOpacity`
  align-self: flex-end;
  height: 40px;
`;

export const CloseText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray};
  `}
`;

export const ModalBody = styled.View``;
