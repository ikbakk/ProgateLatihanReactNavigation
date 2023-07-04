import { FC, useState, useEffect } from 'react';
import { RootStackParamList } from '../../type';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { View, Alert } from 'react-native';
import { Text, Input, Button } from 'react-native-magnus';
import CustomView from './CustomView';

type ContactProps = NativeStackScreenProps<RootStackParamList, 'Contact'>;

const ContactForm = ({ navigation }: ContactProps) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [formValue, setFormValue] = useState({
    name: '',
    message: ''
  });

  useEffect(() => {
    const unsubscribe = navigation.addListener('state', () => {
      if (formValue.name !== '' && formValue.message !== '') {
        Alert.alert(
          'Konfirmasi',
          'Anda telah menuliskan sesuatu dalam formulir. Tetap di sini atau lanjutkan pergi?',
          [
            {
              text: 'Tetap di sini',
              onPress: () => {
                // Tidak melakukan apa-apa, tetap di halaman Contact
              }
            },
            {
              text: 'Lanjutkan pergi',
              onPress: () => {
                navigation.navigate('Home');
              }
            }
          ]
        );
      }
    });

    console.log(formValue);
    return unsubscribe;
  }, [formValue, navigation]);

  return (
    <CustomView>
      <Input
        value={name}
        onChangeText={text => setName(text)}
        my={5}
        placeholder='Nama Anda'
      />
      <Input
        value={message}
        onChangeText={text => setMessage(text)}
        my={5}
        placeholder='Pesan'
        multiline
      />
      <Button onPress={() => setFormValue({ name, message })} my={5} w='100%'>
        Kirim
      </Button>
    </CustomView>
  );
};

export default ContactForm;
