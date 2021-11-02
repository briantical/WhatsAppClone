import React, { useContext } from 'react';
import { Modal, Text, Pressable, View, TouchableWithoutFeedback } from 'react-native';

import { styles } from '@styles/index';
import { contexts, types } from '@store/index';

const { ModalContext } = contexts;
const { ActionType } = types;

const HomeModal = () => {
  const { state, dispatch } = useContext(ModalContext);
  const { visible } = state;

  const toggleModal = () => {
    console.log('Clicked');
    dispatch({ type: ActionType.TOGGLE_MODAL, payload: { visible: !visible } });
  };

  return (
    <Modal animationType='fade' transparent={true} visible={visible} onRequestClose={toggleModal}>
      <TouchableWithoutFeedback onPress={toggleModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>

            <Pressable style={[styles.button, styles.buttonClose]} onPress={toggleModal}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default HomeModal;
