import * as services from './services';
import { useEffect, useState, useLayoutEffect } from 'react';
import * as S from './styled';
import OcurrenceItem from 'components/OcurrenceItem';
import { Ocurrence } from 'types/Ocurrence';
import { Profile } from 'types/user';
import { useAppSelector } from 'hooks/redux-hook';
import { useNavigation } from '@react-navigation/native';
import { StackNavigation } from 'types/Navigation';
import HeaderButton from 'components/HeaderButton';
import theme from 'styles/theme';
import { mock } from 'components/OcurrenceItem/mock';

export const WarningScreen = () => {
  const [docList, setDocList] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation<StackNavigation>();

  const auth: Profile = useAppSelector((state) => state.profile);

  useEffect(() => {
    getWarnings();
  }, []);

  const getWarnings = async () => {
    setLoading(true);
    const res = await services.getWarnings(auth?.property?.id);
    console.log('res', res);
    if (!res.error) {
      setDocList(res.list);
    }
    setLoading(false);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton
          text="Adicionar"
          colorText="purple"
          onPress={() => {
            'In build..';
          }}
        />
      ),
      headerRightContainerStyle: {
        marginRight: 18
      }
    });
  }, []);

  return (
    <S.Container>
      {!loading && /*!docList.length &&*/ !mock.length && (
        <S.EmptyWarning>
          <S.EmptyWarningImage source={require('assets/empty-house.png')} resizeMode="contain" />
          <S.EmptyWarningText>Não há ocorrências para exibir</S.EmptyWarningText>
        </S.EmptyWarning>
      )}

      {
        /*docList.length > 0 &&*/ mock.length > 0 && (
          <S.WallList
            data={/*docList*/ mock}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <OcurrenceItem item={item as Ocurrence} />}
            onRefresh={getWarnings}
            refreshing={loading}
          />
        )
      }
    </S.Container>
  );
};
