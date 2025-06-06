import { Modal, Text, StyleSheet, TextInput, Pressable, } from 'react-native';
import { useUserMood } from '../hooks/useUserMood';
import React, { useEffect, useState } from 'react';
import { Pickers } from './Pickers';
import { getCurrentDate } from '../utils/getCurrentDate';


export const MoodModal = () => {
  const { isModalVisible, toggleModal, addMood, moods, moodToEdit, updateMood, setMoodToEdit } = useUserMood();
  const [ mood, setMood ] = useState<string>( "" );
  const [ sleepQuality, setSleepQuality ] = useState<string>( "" );
  const [ note, setNote ] = useState<string>( "" );

  useEffect( () => {
    if ( moodToEdit ) {//abierto para editar
      setMood( moodToEdit.mood );
      setSleepQuality( moodToEdit.sleepQuality );
      setNote( moodToEdit.note );
    }
    else if ( !isModalVisible ) {      
      setMood( "" );
      setSleepQuality( "" );
      setNote( "" );
    }
  }, [ isModalVisible ] );

  const handleSubmit = () => {//metodo onpress 
    if ( moodToEdit ) {
      updateMood( moodToEdit.id, { mood, sleepQuality, note } );//edito el mood
    } else {//envio el mood nuevo
      const newId = moods.length > 0 ? moods[ moods.length - 1 ].id + 1 : 1;
      const moodUser = {
        id: newId,
        mood,
        sleepQuality,
        note,
        date: getCurrentDate(),
      };
      addMood( moodUser );
    }
    toggleModal();
    setMoodToEdit( null );
  };

  return (
    <Modal
      animationType="fade"
      transparent={ true }
      visible={ isModalVisible }
      onRequestClose={ () => { toggleModal(); setMoodToEdit( null ); } }
    >
      <Pressable style={ style.modalBackground } onPress={ ()=>{toggleModal();setMoodToEdit( null ); } }>
        <Pressable style={ style.containerInputs }>
          <Pickers titlePicker="¿Cómo te sentís hoy?" onValueChange={ setMood } value={ mood }/>
          <Pickers titlePicker="¿Cómo dormiste anoche?" onValueChange={ setSleepQuality } value={ sleepQuality } />
          <Text style={ style.textAddNote }>¿Querés agregar una nota?</Text>
          <TextInput
            textAlignVertical="top"
            multiline
            value={ note }
            onChangeText={ setNote }
            style={ style.textInput }
            maxLength={ 50 }
            placeholder="agrega una nota"
          />
          <Pressable
            style={ [
              style.buttonSend,
              ( mood === "" || sleepQuality === "" ) && { backgroundColor: 'gray' },//extender el stlye, para habilitar o deshabilitar
            ] }
            onPress={ handleSubmit }
            disabled={ mood === "" || sleepQuality === "" }//lo mismo, deshabilitar el boton dependiendo los pickers
          >
            <Text style={ style.textSend }>Enviar</Text>
          </Pressable>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

const style = StyleSheet.create( {
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  containerInputs: {
    position: "absolute",
    top: "20%",
    width: "95%",
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5,
  },
  textAddNote: {
    alignSelf: "center",
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  textInput: {
    borderRadius: 8,
    marginTop: 20,
    borderWidth: 1.5,
    borderColor: "black",
    width: "100%",
    height: 100,
    alignSelf: "center",
    padding: 10,
  },
  buttonSend: {
    marginTop: 15,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "black",
    width: "50%",
    height: 40,
    borderRadius: 10,
  },
  textSend: {
    color: 'white',
    fontWeight: 'bold'
  }
} );