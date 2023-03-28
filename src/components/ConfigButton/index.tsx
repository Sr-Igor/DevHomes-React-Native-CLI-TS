import * as S from './styled';

type ConfgButtonProps = {
  onPress: () => void;
};

const ConfgButton = ({ onPress }: ConfgButtonProps) => {
  return (
    <S.Container onPress={onPress} underlayColor="none">
      <S.ButtonImage source={require('assets/config.png')} />
    </S.Container>
  );
};

export default ConfgButton;
