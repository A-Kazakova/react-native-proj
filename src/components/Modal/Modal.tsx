import React, {  memo } from 'react';
import { Text, View } from 'react-native';
import Modal from 'react-native-modal';

import { ListItem } from 'models/List';

import styles from './Modal.style';


export interface ModalProps {
  isOpen: boolean;
  close: () => void;
  item: ListItem | null;
};


const ModalWindow = ({
  isOpen,
  close,
  item = null,
}: ModalProps) => {
  return (
    <Modal
      isVisible={isOpen}
      onSwipeComplete={close}
      swipeDirection={['down']}
      style={styles.modal}
    >
      <View>
        <View style={styles.content}>
          <View style={styles.row}>
            <Text style={[styles.title, styles.text]}>User name:</Text>
            <Text style={styles.text}>{item?.firstName}</Text>
          </View>
          <View style={styles.row}>
            <Text style={[styles.title, styles.text]}>User lastname:</Text>
            <Text style={styles.text}>{item?.lastName}</Text>
          </View>
          <View style={styles.row}>
            <Text style={[styles.title, styles.text]}>User email:</Text>
            <Text style={styles.text}>{item?.email}</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default memo(ModalWindow);
