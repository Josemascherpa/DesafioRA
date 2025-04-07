import AsyncStorage from '@react-native-async-storage/async-storage';
import { MoodUser } from '../interfaces/moodUser';

export const saveMoodsToStorage = (moods: MoodUser[]) => {
  AsyncStorage.setItem("moods_user", JSON.stringify(moods));
};

export const loadMoodsToStorage = async()=>{
  await AsyncStorage.getItem( "moods_user" );
}