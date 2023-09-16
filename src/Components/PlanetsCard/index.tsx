import { View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';
import Styles from './styles';
import dots from '../../Assets/Images/dots.png';
import eye from '../../Assets/Images/eye.png';
import download from '../../Assets/Images/download.png';
import edit from '../../Assets/Images/edit.png';
import share from '../../Assets/Images/share.png';
import folder from '../../Assets/Images/folder.png';
import lock from '../../Assets/Images/lock.png';
import bin from '../../Assets/Images/delete.png';
import alert from '../../Assets/Images/alert.png';

const PlanetsCard = ({item}: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible)
  }

  const toggleDeleteModal = () => {
    setDeleteModalVisible(!deleteModalVisible)
  }
  return (
    <View style = {Styles.planetsCardMainContainer}>
      <View style = {Styles.threeDotsContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image 
            source={dots}
          />
        </TouchableOpacity>
      </View>
      <Image 
       style = {Styles.cardImage}
       source={{uri: 'https://picsum.photos/200/300'}}
      />
      <View style = {Styles.cardDetailsContainer}>
        <Text style = {Styles.headingText}>
        {item.item.name}
        </Text>
        <Text style = {Styles.descriptionText}>
        The planet is inhabited by {item.item.population} creatures . The terrain is {item.item.terrain}. With orbital period of  {item.item.orbital_period}  of around its local star.
        </Text>
      </View>
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
                <TouchableOpacity style = {Styles.listRow} onPress={() => toggleModal()}>
                  <Image 
                    source={eye}
                    style = {Styles.listIcon}
                  />
                  <Text style = {Styles.listText}>View</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {Styles.listRow} onPress={() => toggleModal()}>
                  <Image 
                    source={download}
                    style = {Styles.listIcon}
                  />
                  <Text style = {Styles.listText}>Download</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {Styles.listRow} onPress={() => toggleModal()}>
                  <Image 
                    source={edit}
                    style = {Styles.listIcon}
                  />
                  <Text style = {Styles.listText}>Rename</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {Styles.listRow} onPress={() => toggleModal()}>
                  <Image 
                    source={share}
                    style = {Styles.listIcon}
                  />
                  <Text style = {Styles.listText}>Share Link</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {Styles.listRow} onPress={() => toggleModal()}>
                  <Image 
                    source={folder}
                    style = {Styles.listIcon}
                  />
                  <Text style = {Styles.listText}>Move</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {Styles.listRow} onPress={() => toggleModal()}>
                  <Image 
                    source={lock}
                    style = {Styles.listIcon}
                  />
                  <Text style = {Styles.listText}>Mark Private</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {Styles.listRow} onPress={() => {
                  setDeleteModalVisible(!deleteModalVisible)
                  toggleModal()
                }}>
                  <Image 
                    source={bin}
                    style = {Styles.listIcon}
                  />
                  <Text style = {[Styles.listText, {color: '#F15454'}]}>Delete</Text>
                </TouchableOpacity>
            </View>
          </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={deleteModalVisible}
        onRequestClose={() => {
          setDeleteModalVisible(!deleteModalVisible);
        }}
        style = {Styles.mainModal}
        >
          <View style = {Styles.centeredView}>
            <View style = {Styles.deleteModalContainer}>
                <Image 
                  source = {alert}
                  style = {Styles.alertIcon}
                />
                <Text style = {Styles.cautionText}>
                Caution!
                </Text>
                <Text style = {Styles.confirmationMessage}>
                Are you sure you want to delete {item.item.name}
                </Text>
                <View style = {Styles.buttonsContainer}>
                  <TouchableOpacity style = {[Styles.submitButtons, {borderColor: '#DEDEDE', backgroundColor: '#ffffff'}]} onPress={() => toggleDeleteModal()}>
                    <Text style = {Styles.buttonText}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style = {[Styles.submitButtons, {borderColor: "#FC5A5A", backgroundColor: '#FC5A5A'}]} onPress={() => toggleDeleteModal()}>
                    <Text style = {[Styles.buttonText, {color: '#ffffff'}]}>Yes</Text>
                  </TouchableOpacity>
                </View>
            </View>
          </View>
      </Modal>
    </View>
  )
}

export default PlanetsCard;