import { useState, useEffect, useCallback } from 'react';
import * as services from './services';
import * as S from './styled';
import theme from 'styles/theme';
import RecoverItem from 'components/RecoverItem';
import { Recovered } from 'types/RecoveredItem';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { StackNavigation } from 'types/Navigation';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import HeaderButton from 'components/HeaderButton';

export const FoundAndLostScreen = () => {
  const [loading, setLoading] = useState(false);
  const [foundList, setFoundList] = useState([]);
  const [lostList, setLostList] = useState([]);

  const navigation = useNavigation<StackNavigation>();
  const route = useRoute();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton
          text="Adicionar"
          colorText={'purple'}
          onPress={() => navigation.navigate('FoundAndLostAddScreen')}
        />
      ),
      headerRightContainerStyle: {
        marginRight: 18
      }
    });
    getFoundAndLost();
  }, []);

  useFocusEffect(
    useCallback(() => {
      getFoundAndLost();
    }, [])
  );

  const getFoundAndLost = async () => {
    setLoading(true);
    const res = await services.getFoundAndLost();
    if (!res.error) {
      setFoundList(res.recovered);
      setLostList(res.lost);
    }
    setLoading(false);
  };

  const handleFoundItem = async (item: Recovered) => {
    setLoading(true);
    const res = await services.recovereFoundAndLost(item.id);
    if (!res.error) {
      getFoundAndLost();
      Toast.show({
        type: 'success',
        text1: 'Item recuperado com sucesso',
        text2: 'Obrigado por ajudar a comunidade',
        visibilityTime: 3000,
        autoHide: true
      });
    }
    setLoading(false);
  };

  return (
    <S.Container>
      <S.Scroller>
        {loading && (
          <S.Loadingbox>
            <S.Loading size={'large'} color={theme.colors.button} />
          </S.Loadingbox>
        )}
        {!loading && !foundList.length && !lostList.length && (
          <S.EmptyArea>
            <S.EmptyImage source={require('assets/empty-house.png')} resizeMode="contain" />
            <S.EmptyText>Não há items para exibir</S.EmptyText>
          </S.EmptyArea>
        )}
        {!loading && lostList.length > 0 && (
          <>
            <S.TitleList>Itens Perdidos</S.TitleList>
            <S.ListItems
              horizontal
              showsHorizontalScrollIndicator={false}
              data={lostList}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <RecoverItem item={item as Recovered} onRecover={handleFoundItem} />
              )}
            />
          </>
        )}
        {!loading && foundList.length > 0 && (
          <>
            <S.TitleList>Itens encontrados</S.TitleList>
            <S.ListItems
              horizontal
              showsHorizontalScrollIndicator={false}
              data={foundList}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => <RecoverItem item={item as Recovered} isRecovered />}
            />
          </>
        )}
      </S.Scroller>
    </S.Container>
  );
};
