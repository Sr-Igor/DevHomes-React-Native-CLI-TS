import * as services from './services';
import { useEffect, useState } from 'react';
import * as S from './styled';
import WallItem from 'components/WallItem';
import { Wall } from 'types/Wall';

export const WallScreen = () => {
  const [wallList, setWallList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getWarnings();
  }, []);

  const getWarnings = async () => {
    setLoading(true);
    const res = await services.getWarning();

    if (!res.error) {
      setWallList(res.list);
    }
    setLoading(false);
  };

  return (
    <S.Container>
      {!loading && !wallList.length && (
        <S.EmptyWarning>
          <S.EmptyWarningImage source={require('assets/empty-house.png')} resizeMode="contain" />
          <S.EmptyWarningText>Não há avisos no mural</S.EmptyWarningText>
        </S.EmptyWarning>
      )}

      {wallList.length > 0 && (
        <S.WallList
          data={wallList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <WallItem item={item as Wall} />}
          onRefresh={getWarnings}
          refreshing={loading}
        />
      )}
    </S.Container>
  );
};
