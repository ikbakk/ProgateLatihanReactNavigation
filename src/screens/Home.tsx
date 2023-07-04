import { RootStackParamList } from '../../type';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import CustomView from '../components/CustomView';
import { Text, Button } from 'react-native-magnus';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({ navigation }: HomeProps) => {
  const handleNavigate = () => {
    navigation.navigate('Progate', {
      name: 'Iqbal Firdaus',
      language: 'React Native'
    });
  };

  return (
    <CustomView justify='center' alignment='center' px={15} py={10}>
      <Text>Home Screen</Text>
      <Button w='100%' onPress={handleNavigate}>
        Go to Progate
      </Button>
    </CustomView>
  );
};

export default Home;
