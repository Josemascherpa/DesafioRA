import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { LoadingScreen } from './screens/LoadingScreen';
import { MainScreen } from './screens/MainScreen';

export default function App() {
  return (
    <SafeAreaView style={ styles.container }>
      {/* <LoadingScreen /> */ }
      <MainScreen />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
} );
