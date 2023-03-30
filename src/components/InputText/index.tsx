import * as S from './styled';

type InputTextProps = {
  error?: string;
  placeholder?: string;
  value?: string;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  secureTextEntry?: boolean;
  onChangeText?: (text: string) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const InputText = ({
  error,
  placeholder,
  value,
  onChangeText,
  keyboardType,
  secureTextEntry
}: InputTextProps) => {
  return (
    <S.Container>
      <S.InputText
        hasError={!!error}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
      <S.BoxError>{error && <S.ErrorText>{error}</S.ErrorText>}</S.BoxError>
    </S.Container>
  );
};
