import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { store } from './src/store/root-reducer'
import { Provider } from 'react-redux'
import { Products } from './src/Components/Products';
import { NavigatorComp } from './src/Navigation/DrawerNavigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <NavigationContainer>
          <NavigatorComp />
          <StatusBar style="auto" />
        </NavigationContainer>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343a40',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
