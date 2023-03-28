import * as S from './styled';

export type HeaderButtonProps = {
  onPress: () => void;
  text?: string;
};

const HeaderButton = ({ onPress, text = 'Avançar' }: HeaderButtonProps) => {
  return (
    <S.ButtonArea onPress={onPress} underlayColor="none">
      <S.ButtonText>{text}</S.ButtonText>
    </S.ButtonArea>
  );
};

export default HeaderButton;
