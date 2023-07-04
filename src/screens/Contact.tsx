import { RootStackParamList } from '../../type';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import CustomView from '../components/CustomView';
import ContactForm from '../components/ContactForm';

type ContactProps = NativeStackScreenProps<RootStackParamList, 'Contact'>;

const Contact = ({ route, navigation }: ContactProps) => {
  return (
    <CustomView px={15} py={10} justify='center' alignment='center'>
      <ContactForm route={route} navigation={navigation} />
    </CustomView>
  );
};

export default Contact;
