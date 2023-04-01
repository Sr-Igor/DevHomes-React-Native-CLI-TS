import * as services from './services';
import { useEffect, useState } from 'react';
import * as S from './styled';
import DocItem from 'components/DocItem';
import { Wall } from 'types/Wall';

export const DocumentsScreen = () => {
  const [docList, setDocList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDocs();
  }, []);

  const getDocs = async () => {
    setLoading(true);
    const res = await services.getDocs();
    console.log('res', res);
    if (!res.error) {
      setDocList(res.list);
    }
    setLoading(false);
  };

  return (
    <S.Container>
      {!loading && !docList.length && (
        <S.EmptyWarning>
          <S.EmptyWarningImage source={require('assets/empty-house.png')} resizeMode="contain" />
          <S.EmptyWarningText>Não há avisos no mural</S.EmptyWarningText>
        </S.EmptyWarning>
      )}

      {docList.length > 0 && (
        <S.WallList
          data={docList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <DocItem item={item as Wall} />}
          onRefresh={getDocs}
          refreshing={loading}
        />
      )}
    </S.Container>
  );
};
