import { View, Text, Image } from 'react-native';
import React from 'react';
import Styles from './styles';
import characterImage from '../../Assets/Images/splashImage.png';

const CharacterCard = () => {
  return (
    <View style = {Styles.characterCardmainContainer}>
      <View style = {Styles.imageContainer}>
        <Image 
            style = {Styles.characterImage}
            source={characterImage}
        />
      </View>
      <View style = {Styles.descriptionContainer}>
        <Text style = {Styles.charactername}>
        $Name
        </Text>
        <Text style = {Styles.characterDescription}>
        The character Hails from
        $homeworld , born on $birth_year
        </Text>
      </View>
    </View>
  )
}

export default CharacterCard;