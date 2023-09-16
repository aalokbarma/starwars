import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Styles from './styles';

const DetailsPopupCard = ({item, setModalVisible}: any) => {
  return (
    <View style = {Styles.detailsPopupContainer}>
      <View style = {Styles.imageContainer}>
        <Image 
            style = {Styles.cardImage}
            source={{uri: 'https://picsum.photos/200/300'}}
        />
      </View>
      <View style = {Styles.detailsContainer}>
        <View style = {Styles.headingSection}>
            <Text style = {Styles.cardHeading}>
            {item.item.name}
            </Text>
            <Text style = {Styles.cardSubHeading}>
            {item.item.homeworld}
            </Text>
        </View>
        <View style = {Styles.descriptionSection}>
            <Text style = {Styles.cardDescription}>
            The character Hails from 
            {item.item.homeworld} , born on {item.item.birth_year}
            </Text>
            <TouchableOpacity style = {Styles.submitButtonContainer} onPress={() => setModalVisible(false)}>
                <Text style = {Styles.gotItText}>Got It</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default DetailsPopupCard;