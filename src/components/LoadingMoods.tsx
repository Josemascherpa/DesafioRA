
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';

export const LoadingMoods = () => {
  return (
    <View style={ styles.view }>
      <ActivityIndicator size='large' />
      <Text style={ styles.text }>Cargando Moods</Text>
    </View>
  );
};

const styles = StyleSheet.create( {
  view: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    marginTop: 10
  }

} );
