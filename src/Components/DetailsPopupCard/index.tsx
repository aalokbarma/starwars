import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Styles from './styles';
import cardImage from '../../Assets/Images/splashImage.png'

const DetailsPopupCard = () => {
  return (
    <View style = {Styles.detailsPopupContainer}>
      <View style = {Styles.imageContainer}>
        <Image 
            style = {Styles.cardImage}
            source={cardImage}
        />
      </View>
      <View style = {Styles.detailsContainer}>
        <View style = {Styles.headingSection}>
            <Text style = {Styles.cardHeading}>
            $Name
            </Text>
            <Text style = {Styles.cardSubHeading}>
            $homeworld
            </Text>
        </View>
        <View style = {Styles.descriptionSection}>
            <Text style = {Styles.cardDescription}>
            The character Hails from
$homeworld , born on $birth_year
            </Text>
            <TouchableOpacity style = {Styles.submitButtonContainer}>
                <Text style = {Styles.gotItText}>Got It</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default DetailsPopupCard;