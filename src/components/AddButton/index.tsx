import * as S from './styled';
type ConfgButtonProps = {
  onPress: () => void;
};

const AddButton = ({ onPress }: ConfgButtonProps) => {
  return (
    <S.Container onPress={onPress} underlayColor="none">
      <S.ButtonImage source={require('assets/add.png')} />
    </S.Container>
  );
};

export default AddButton;
