import { create } from 'zustand';
import { MoodUser } from '../interfaces/moodUser';
import { v4 as uuidv4 } from 'uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';

type UserMoodState = {
  moods: MoodUser[];
  isModalVisible: boolean;
  toggleModal: () => void;
  addMood: ( moods: MoodUser ) => void;
  removeMood: ( id: number ) => void;
  updateMood: ( id: number, updatedData: Partial<MoodUser> ) => void;
  loadMoods: () => Promise<void>;
};

export const useUserMood = create<UserMoodState>( ( set ) => ( {
  moods: [],
  isModalVisible: false,

  toggleModal: () => set( ( state ) => ( { isModalVisible: !state.isModalVisible } ) ),


  addMood: ( moods ) =>
    set( ( state ) => ( {
      moods: [
        ...state.moods,
        moods,
      ],
    } ) ),

  removeMood: ( id ) =>
    set( ( state ) => ( {
      moods: state.moods.filter( ( entry ) => entry.id !== id ),
    } ) ),

  updateMood: ( id, updatedData ) =>
    set( ( state ) => ( {
      moods: state.moods.map( ( entry ) =>
        entry.id === id ? { ...entry, ...updatedData } : entry
      ),
    } ) ),
  loadMoods: async () => {
    try {
      const saved = await AsyncStorage.getItem( "moods_user" );
      if ( saved !== null ) {
        const parsed = JSON.parse( saved ) as MoodUser[];
        set( { moods: parsed } );
      }
    } catch ( error ) {
      console.error( 'Error loading moods from storage:', error );
    }
  },
} ) );