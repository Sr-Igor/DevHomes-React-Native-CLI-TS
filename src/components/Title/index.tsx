import * as S from './styled';

export type DefaultTitleProps = {
  title: string;
  noMargin?: boolean;
  small?: boolean;
};

const DefaultTitle = ({ title = 'Title', noMargin, small }: DefaultTitleProps) => {
  return (
    <S.Title noMargin={noMargin} small={small}>
      {title}
    </S.Title>
  );
};

export default DefaultTitle;
