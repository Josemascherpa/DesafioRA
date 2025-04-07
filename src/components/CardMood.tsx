
import { Pressable, Text, View, StyleSheet } from 'react-native';
import { useUserMood } from '../hooks/useUserMood';
import { InfoRowCard } from './InfoRowCard';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';

interface cardMoodProps {
  id: number;
  mood: number;
  sleepQuality: number;
  note: string;
  date: string;
}

export const CardMood = ( { id, mood, sleepQuality, note, date }: cardMoodProps ) => {
  const { removeMood, setMoodToEdit, toggleModal } = useUserMood();
  const showNote = note.trim() ? note : "no se escribio una nota";
  return (
    <View style={ style.cardContainer }>

      <InfoRowCard question="Como te sientes hoy?" value={ mood } />
      <InfoRowCard question="Como dormiste hoy?" value={ sleepQuality } />
      <InfoRowCard question="Nota:" value={ showNote } />
      <InfoRowCard question="Creado:" value={ date } />

      <View style={ { flexDirection: "row", alignItems: "center",marginTop:10 } }>
        <Pressable onPress={ () => removeMood( id ) }>
          <AntDesign name="delete" size={ 24 } color="black" />
        </Pressable>
        <Pressable onPress={ () => {
          setMoodToEdit( { id, mood, sleepQuality, note, date } );
          toggleModal();
        } }>
          <Feather name="edit" size={ 24 } color="black" />
        </Pressable>
      </View>

    </View>
  );
};

const style = StyleSheet.create( {
  cardContainer: {
    marginTop: 8,
    marginBottom: 10,
    borderRadius: 10,
    width: "100%",
    height: 150,
    borderWidth: 2,    
    alignItems: "center",
    justifyContent: "center",

  },
} );
