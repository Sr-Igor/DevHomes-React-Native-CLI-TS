import * as S from './styled';
import { Wall } from 'types/Wall';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from 'styles/theme';
import { useState } from 'react';
import * as services from './services';

type WallItemProps = {
  item: Wall;
};

const WallItem = ({ item }: WallItemProps) => {
  const [likeCount, setLikeCount] = useState(item.likes);
  const [liked, setLiked] = useState(item.liked);

  const handleLike = async () => {
    if (liked) {
      setLiked(false);
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
      setLiked(true);
    }

    await services.likeWall(item.id);
  };

  return (
    <S.Container>
      <S.HeaderItem>
        <Icon name="newspaper-o" size={30} color={theme.colors.button} />
        <S.Infos>
          <S.TitleWall>{item.title}</S.TitleWall>
          <S.DateWall>{item.datecreated}</S.DateWall>
        </S.Infos>
      </S.HeaderItem>
      <S.BodyItem>{item.body}</S.BodyItem>
      <S.FooterItem>
        <S.LikeButton onPress={handleLike}>
          <S.ButtonText>Like</S.ButtonText>
          <Icon name={liked ? 'heart' : 'heart-o'} size={15} color={theme.colors.red} />
        </S.LikeButton>
        <S.LikeText>
          {likeCount} like{likeCount === 1 ? '' : 's'}
        </S.LikeText>
      </S.FooterItem>
    </S.Container>
  );
};

export default WallItem;
