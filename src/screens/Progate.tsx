import { RootStackParamList } from '../../type';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-magnus';
import CustomView from '../components/CustomView';

type ProgateProps = NativeStackScreenProps<RootStackParamList, 'Progate'>;

const Progate = ({ route, navigation }: ProgateProps) => {
  return (
    <CustomView justify='center' alignment='center' px={15} py={10}>
      <Text fontSize='2xl'>Welcome to Progate, {route.params.name}!</Text>
      <Text fontSize='xl'>Ayo belajar {route.params.language}!</Text>
      <Button my={5} w={'100%'} onPress={() => navigation.navigate('Contact')}>
        Lihat Kontak
      </Button>
      <Button my={5} w={'100%'} onPress={() => navigation.goBack()}>
        Kembali
      </Button>
    </CustomView>
  );
};

export default Progate;
