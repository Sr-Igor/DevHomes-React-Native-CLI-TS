import * as S from './styled';

import { Platform } from 'react-native';

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  return (
    <S.Modal visible={isOpen} animationType="fade" transparent onRequestClose={onClose}>
      <S.ModalContainer behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <S.ModalBox>
          <S.ModalCloser>
            <S.CloseText onPress={onClose}>Fechar</S.CloseText>
          </S.ModalCloser>
          <S.ModalBody>{children}</S.ModalBody>
        </S.ModalBox>
      </S.ModalContainer>
    </S.Modal>
  );
};

export default Modal;
