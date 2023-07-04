import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './type';

import Home from './src/screens/Home';
import Progate from './src/screens/Progate';
import Contact from './src/screens/Contact';
import { ThemeProvider } from 'react-native-magnus';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={{ headerShown: true }}>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Progate' component={Progate} />
          <Stack.Screen name='Contact' component={Contact} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

AppRegistry.registerComponent('App', () => App);
