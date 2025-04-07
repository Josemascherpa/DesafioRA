
import { Pressable, Text, View } from 'react-native';
import { useUserMood } from '../hooks/useUserMood';

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
    <View style={ { marginTop: 8, marginBottom: 10, borderRadius: 10, width: "100%", height: 130, borderWidth: 1, backgroundColor: "red", alignItems: "center", justifyContent: "center" } }>
      <Text style={ { fontSize: 15, width: "100%", textAlign: "center" } }>{ mood }</Text>
      <Text>{ sleepQuality }</Text>
      <Text>{ showNote }</Text>
      <Text>{ date }</Text>
      <Pressable onPress={ () => removeMood( id ) }>
        <Text>X</Text>
      </Pressable>
      <Pressable onPress={ () => {
        setMoodToEdit( { id, mood, sleepQuality, note, date } );
        toggleModal();
      } }>
        <Text>M</Text>
      </Pressable>
    </View>
  );
};
