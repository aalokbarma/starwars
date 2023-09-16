import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Styles from './styles';
import cardImage from '../../Assets/Images/splashImage.png';
import rocket from '../../Assets/Images/rocket.png';

const StarshipsCard = () => {
  return (
    <View style = {Styles.starshipsCardMainContainer}>
      <View style = {Styles.cardImageContainer}>
        <Image 
          style = {Styles.cardImage}
          source={cardImage}
        />
      </View>
      <View style = {Styles.cardDetailsContainer}>
        <View style = {Styles.topRowContainer}>
          <View style = {Styles.headerLeftColumn}>
            <Text style = {Styles.cardHeading}>
            $Name
            </Text>
            <Text style = {Styles.cardSubHeading}>
            $Model - $Starship_class
            </Text>
          </View>
          <View style = {Styles.headerRightColumn}>
            <TouchableOpacity style = {Styles.rocketIconContainer}>
              <Image 
                source={rocket}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style = {Styles.bottomRowContainer}>
          <Text style = {Styles.descriptionText}>
          The starship starred in $films and was piloted by $pilots.
          </Text>
          <Text style = {Styles.ratingsText}>
          $Manufacturer - $hyperdrive_rating
          </Text>
        </View>
      </View>
    </View>
  )
}

export default StarshipsCard;