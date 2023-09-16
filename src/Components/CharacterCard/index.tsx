import { View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';
import Styles from './styles';
import DetailsPopupCard from '../DetailsPopupCard';

const CharacterCard = ({item}: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableOpacity style = {Styles.characterCardmainContainer} onPress={() => setModalVisible(true)}>
        <View style = {Styles.imageContainer}>
          <Image 
              style = {Styles.characterImage}
              source={{uri: 'https://picsum.photos/200/300'}}
          />
        </View>
        <View style = {Styles.descriptionContainer}>
          <Text style = {Styles.charactername}>
          {item.item.name}
          </Text>
          <Text style = {Styles.characterDescription}>
          The character Hails from
          {item.item.homeworld} , born on {item.item.birth_year}
          </Text>
        </View>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        style = {Styles.mainModal}
        >
          <View style = {Styles.centeredView}>
            <View style = {Styles.modalContainer}>
                <DetailsPopupCard item = {item} setModalVisible = {setModalVisible} />
            </View>
          </View>
      </Modal>
    </>
  )
}

export default CharacterCard;