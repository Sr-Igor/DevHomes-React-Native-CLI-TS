import * as S from './styled';

import { Platform } from 'react-native';

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  return (
    <S.Modal visible={isOpen} animationType="slide" transparent onRequestClose={onClose}>
      <S.ModalContainer behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <S.ModalCloser>
          <S.CloseText onPress={onClose}>Fechar</S.CloseText>
        </S.ModalCloser>
        {children}
      </S.ModalContainer>
    </S.Modal>
  );
};

export default Modal;
