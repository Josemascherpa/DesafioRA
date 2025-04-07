import { create } from 'zustand';
import { MoodUser } from '../interfaces/moodUser';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { saveMoodsToStorage } from '../utils/storage';
import { getCurrentDate } from '../utils/getCurrentDate';

type UserMoodState = {
  moods: MoodUser[];
  isModalVisible: boolean;
  toggleModal: () => void;
  addMood: ( mood: MoodUser ) => void;
  removeMood: ( id: number ) => void;
  updateMood: ( id: number, updatedData: Partial<MoodUser> ) => void;
  loadMoods: () => Promise<void>;
  isLoadingMoods: boolean;
  moodToEdit: MoodUser | null;
  setMoodToEdit: (mood:MoodUser|null) => void;//solo para limpiar el moodtoedit
  hasMoodToday:()=>boolean;
};

export const useUserMood = create<UserMoodState>( ( set, get ) => ( {
  moods: [],
  isModalVisible: false,
  isLoadingMoods: true,
  moodToEdit:null,

  hasMoodToday:()=>{
    const today = getCurrentDate();
    return get().moods.some(mood => mood.date === today);
  },

  toggleModal: () => set( ( state ) => ( { isModalVisible: !state.isModalVisible } ) ),

  setMoodToEdit: (mood) => set({ moodToEdit: mood }),

  addMood: async ( mood ) => {
    set( ( state ) => {
      const updatedMoods = [ ...state.moods, mood ];

      return { moods: updatedMoods };
    } );
    const addMoods = get().moods;
    await saveMoodsToStorage( addMoods );
  },


  removeMood: async ( id ) => {
    set( ( state ) => {
      const updatedMoods = state.moods.filter( ( entry ) => entry.id !== id );
      return { moods: updatedMoods };
    } );
    const newMoods = get().moods;
    await saveMoodsToStorage( newMoods );
  },



  updateMood: async( id, updatedData ) => {
    set( ( state ) => {
      const updatedMoods = state.moods.map( ( entry ) =>
        entry.id === id ? { ...entry, ...updatedData } : entry
      );      
      return { moods: updatedMoods };
    } );
    const updateMoods = get().moods;
    await saveMoodsToStorage( updateMoods );
  },
    
  loadMoods: async () => {
    try {
      const saved = await AsyncStorage.getItem( "moods_user" );
      if ( saved !== null ) {
        const parsed = JSON.parse( saved ) as MoodUser[];
        set( { moods: parsed } );
      }
    } catch ( error ) {
      console.error( "error al cargar los moods:", error );
    } finally {
      set( { isLoadingMoods: false } );
    }
  },
} ) );