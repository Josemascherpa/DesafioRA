
import { Text, View, StyleSheet } from 'react-native';

interface InfoRowProps {
  question: string;
  value: string | number;

}
export const InfoRowCard = ( { question, value, }: InfoRowProps ) => {
  return (
    <View style={ styles.infoContainer }>
      <Text style={ { fontSize: 15, width: 150, textAlign: "left",fontWeight:"bold" } }>{ question }</Text>
      <Text style={ { marginLeft: 10, fontSize: 15, flex:0.95, textAlign: "left"} }>{ value }</Text>
    </View>
  );
};

const styles = StyleSheet.create( {
  infoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    alignItems: "center",    
  },

} );
