

import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';


export const LoadingScreen = () => {

  return (
    <View style={ styles.container }>
      <ActivityIndicator color="red" size="large" />
      <Text style={ styles.textLoading }>Cargando..</Text>
    </View>
  );



};

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center'
  },
  textLoading: {
    color: "red",
    fontSize: 20,
    marginTop: 10,
  }
} );