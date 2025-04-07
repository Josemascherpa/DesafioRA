
import { Picker } from '@react-native-picker/picker';
import { Text, View, StyleSheet } from 'react-native';

interface PickersProps {
  titlePicker: string;
  onValueChange: ( value: string ) => void;
  value?: string;
}

export const Pickers = ( { titlePicker, onValueChange, value = "" }: PickersProps ) => {
  const optionsPicker = [ "Excelente", "Muy bien", "Bien", "No tan bien", "Mal", "Muy mal" ];
  return (
    <View style={ styles.containerPicker }>
      <Text style={ styles.textTitle }>{ titlePicker }</Text>
      <Picker
        selectedValue={ value }
        onValueChange={ onValueChange }
        style={ styles.picker }
      >
        <Picker.Item label="Seleccione una opción" value="" style={ styles.placeholderPicker } />
        { optionsPicker.map( ( word, index ) => (
          <Picker.Item key={ index } label={ word } value={ word } />
        ) ) }
      </Picker>
    </View>

  );
};

const styles = StyleSheet.create( {
  containerPicker: {
    marginLeft: 15,
    alignItems: "center",
    flexDirection: "row"
  },
  textTitle: {
    marginRight: 10,
    fontSize: 15,
    fontWeight: "bold"
  },
  picker: {
    borderWidth: 1,
    flex: 1,
    height: "auto",
    alignSelf: "center"
  },
  placeholderPicker: {
    fontSize: 15
  }

} );
