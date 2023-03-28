import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
  ${({ theme }) => css`
    flex: 1;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
  `}
`;

export const Title = styled.Text``;

export const InputName = styled.TextInput`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.gray};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    margin-bottom: ${theme.spacings.small};
  `}
`;

export const ExerciceArea = styled.FlatList`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
  `}
`;

//Modal Children

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray};
    font-weight: ${theme.font.bold};
  `}
`;

export const MusclesArea = styled.ScrollView`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxsmall};
  `}
`;

export const Muscle = styled.TouchableHighlight<{ selected: boolean }>`
  ${({ theme, selected }) => css`
    width: 50px;
    height: 50px;
    border-radius: ${theme.border.radius};
    background-color: ${!selected ? theme.colors.lightGray : theme.colors.red};
    align-items: center;
    justify-content: center;
    margin-right: ${theme.spacings.xsmall};
  `}
`;

export const MuscleImage = styled.Image`
  width: 40px;
  height: 40px;
`;

export const TrainningInfoArea = styled.View`
  flex-direction: row;
  gap: 10px;
`;

export const TrainningArea = styled.ScrollView`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};
  `}
`;

export const TrainningTitle = styled.TextInput`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.gray};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
  `}
`;

export const SaveArea = styled.View`
  ${({ theme }) => css`
    margin: ${theme.spacings.small};
  `}
`;
