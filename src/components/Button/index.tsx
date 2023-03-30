import * as S from './styled';

export type ButtonProps = {
  text: string;
  onPress: () => void;
  textColor?: 'ligth' | 'dark';
  bgColor?: 'ligth' | 'dark' | 'unfilled' | 'selected' | 'secondary';
  width?: string;
  loading?: boolean;
};

const DefaultButton = ({
  text = 'Button',
  onPress,
  textColor = 'dark',
  bgColor = 'ligth',
  width = '100%',
  loading = false
}: ButtonProps) => {
  return (
    <S.ButtonArea
      onPress={onPress}
      width={width}
      bgColor={bgColor}
      underlayColor="none"
      disabled={loading}
      isLoading={loading}
    >
      <>
        {loading && <S.LoadingIcon />}
        {!loading && <S.ButtonText textColor={textColor}>{text}</S.ButtonText>}
      </>
    </S.ButtonArea>
  );
};

export default DefaultButton;
