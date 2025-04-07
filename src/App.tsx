import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet} from 'react-native';
import { MainScreen } from './screens/MainScreen';

export default function App() {
  return (
    <SafeAreaView style={ styles.container }>      
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
