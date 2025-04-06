import { Modal, Text, StyleSheet, TextInput, Pressable, } from 'react-native';
import { useUserMood } from '../hooks/useMoodStore';
import React, { useState } from 'react';
import { Pickers } from './Pickers';


export const MoodModal = () => {
  const { isModalVisible, toggleModal, addMood, moods } = useUserMood();
  const [ mood, setMood ] = useState<number>( 0 );
  const [ sleepQuality, setSleepQuality ] = useState<number>( 0 );
  const [ note, setNote ] = useState<string>( "" );

  const handleSubmit = () => {
    const newId = moods.length > 0 ? moods[ moods.length - 1 ].id + 1 : 1;
    const moodUser = {
      id: newId,
      mood,
      sleepQuality,
      note,
      date: new Date().toISOString(),
    };
    addMood( moodUser );
    toggleModal();
    setMood( 0 );
    setSleepQuality( 0 );
    setNote( "" );
  };

  return (
    <Modal
      animationType="fade"
      transparent={ true }
      visible={ isModalVisible }
      onRequestClose={ toggleModal }
    >
      <Pressable style={ style.modalBackground } onPress={ toggleModal }>
        <Pressable style={ style.containerInputs }>
          <Pickers titlePicker="¿Cómo te sentís hoy?" onValueChange={ setMood } />
          <Pickers titlePicker="¿Cómo dormiste anoche?" onValueChange={ setSleepQuality } />
          <Text style={ style.textAddNote }>¿Querés agregar una nota?</Text>
          <TextInput
            textAlignVertical="top"
            multiline
            value={ note }
            onChangeText={ setNote }
            style={ style.textInput }
            maxLength={ 100 }
          />
          <Pressable
            style={ [
              style.buttonSend,
              ( mood === 0 || sleepQuality === 0 ) && { backgroundColor: 'gray' },//extender el stlye, para habilitar o deshabilitar
            ] }
            onPress={ handleSubmit }
            disabled={ mood === 0 || sleepQuality === 0 }//lo mismo, deshabilitar el boton dependiendo los pickers
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
    borderWidth: 1,
    borderColor: "red",
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
    backgroundColor: "red",
    width: "50%",
    height: 40,
    borderRadius: 10,
  },
  textSend: {
    color: 'white',
    fontWeight: 'bold'
  }
} );