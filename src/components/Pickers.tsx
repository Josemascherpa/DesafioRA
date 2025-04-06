
import { Picker } from '@react-native-picker/picker';
import { Text, View } from 'react-native';

interface PickersProps {
  titlePicker:string;
  onValueChange: (value: number) => void;
}

export const Pickers = ( { titlePicker,onValueChange }: PickersProps ) => {
  return (
    <View style={{marginLeft:30,alignItems:"center",flexDirection:"row"}}>
      <Text style={{marginRight:10,fontSize:15,fontWeight:"bold"}}>{titlePicker}</Text>
      <Picker
      selectedValue={0}
      onValueChange={onValueChange}      
      style={ { borderWidth:1,borderColor:"red", width: "50%", height: "auto", alignSelf: "center" } }
    >
      <Picker.Item label="del 1 al 10" value={ null } />
      { Array.from( { length: 10 }, ( _, i ) => i + 1 ).map( ( num ) => (
        <Picker.Item key={ num } label={ num.toString() } value={ num } />
      ) ) }
    </Picker>
    </View>

  );
};
