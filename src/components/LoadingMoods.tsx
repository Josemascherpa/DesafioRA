
import { Text, View, ActivityIndicator } from 'react-native';

export const LoadingMoods = () => {
  return (
    <View style={{flex:1,justifyContent:"center"}}>
      <ActivityIndicator size='large'/>
      <Text style={{marginTop:10}}>Cargando Moods</Text>
    </View>
  );
};
