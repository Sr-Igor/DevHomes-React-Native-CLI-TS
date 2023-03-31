import * as S from './styled';

export type HeaderButtonProps = {
  onPress: () => void;
  text?: string;
  colorText?: 'blue' | 'purple';
};

const HeaderButton = ({ onPress, text = 'Avançar', colorText = 'blue' }: HeaderButtonProps) => {
  return (
    <S.ButtonArea onPress={onPress} underlayColor="none">
      <S.ButtonText colorText={colorText}>{text}</S.ButtonText>
    </S.ButtonArea>
  );
};

export default HeaderButton;
