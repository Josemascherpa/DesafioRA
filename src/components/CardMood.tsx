
import { Pressable, Text, View, StyleSheet } from 'react-native';
import { useUserMood } from '../hooks/useUserMood';
import { InfoRowCard } from './InfoRowCard';

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
      <Pressable onPress={ () => removeMood( id ) }>
        <Text>X</Text>
      </Pressable>
      <Pressable onPress={ () => {
        setMoodToEdit( { id, mood, sleepQuality, note, date } );
        toggleModal();
      } }>
        <Text>M</Text>
      </Pressable>
    <View style={ style.cardContainer }>

      <InfoRowCard question="Como te sientes hoy?" value={ mood } />
      <InfoRowCard question="Como dormiste hoy?" value={ sleepQuality } />
      <InfoRowCard question="Nota:" value={ showNote } />
      <InfoRowCard question="Creado:" value={ date } />
    </View>
  );
};
