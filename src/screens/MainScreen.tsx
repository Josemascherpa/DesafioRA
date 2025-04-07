

import { Text, StyleSheet, View, StatusBar, FlatList, Pressable } from 'react-native';

import { useUserMood } from '../hooks/useUserMood';
import { MoodModal } from '../components/MoodModal';
import { CardMood } from '../components/CardMood';
import { useEffect } from 'react';

export const MainScreen = () => {

  const { moods, toggleModal, loadMoods, isLoadingMoods,hasMoodToday} = useUserMood();

  useEffect( () => {
    const fetchMoods = async () => {
      await loadMoods();
    };
    fetchMoods();
  }, [] );

  return (

    <View style={ style.container }>
      <MoodModal />
      <View style={ style.containerTitle }>
        <Text style={ { fontSize: 50 } } >BIENESAPP</Text>
      </View>
      <View style={ style.containerFlatlist }>
        { isLoadingMoods ? (
          <LoadingMoods/>
        ) : (
          <FlatList
            keyExtractor={ ( item ) => item.id.toString() }
            data={ moods }
            renderItem={ ( { item } ) =>
              <CardMood
                id={ item.id }
                mood={ item.mood }
                sleepQuality={ item.sleepQuality }
                note={ item.note }
                date={ item.date }
              />
            }
            style={ style.flatlist }
          />
        ) }
      </View>
      <View style={ style.containerButton }>
        <Pressable disabled={isLoadingMoods || hasMoodToday()} onPress={ () => toggleModal() } style={ style.button }>
          <Text> Agregar Nuevo Mood</Text>
        </Pressable>
      </View>
    </View>

  );
};

const style = StyleSheet.create( {
  container: {
    flex: 1,
    width: "100%",
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
  },
  containerTitle: {
    backgroundColor: "red",
    width: "100%",
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center"
  },
  containerFlatlist: {
    flex: 0.7,
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    width: "100%",
    height: "100%",
    paddingTop: 10,
    paddingBottom: 10,
  },
  flatlist: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "red",
    backgroundColor: "green",
    width: "90%",
    height: "80%",
    alignContent: "center",
  },
  containerButton: {
    flex: 0.1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    width: "70%",
    height: "50%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "red",
    alignItems: "center",
    justifyContent: "center"
  },

} );
