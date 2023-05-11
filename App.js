import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { store } from './src/store/root-reducer'
import { Provider } from 'react-redux'
import { Products } from './src/Components/Products';

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <Products />
        <StatusBar style="auto" />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
