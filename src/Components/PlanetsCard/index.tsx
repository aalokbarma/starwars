import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Styles from './styles';
import cardImage from '../../Assets/Images/splashImage.png';
import dots from '../../Assets/Images/dots.png';

const PlanetsCard = () => {
  return (
    <View style = {Styles.planetsCardMainContainer}>
      <View style = {Styles.threeDotsContainer}>
        <TouchableOpacity>
          <Image 
            source={dots}
          />
        </TouchableOpacity>
      </View>
      <Image 
       style = {Styles.cardImage}
       source={cardImage}
      />
      <View style = {Styles.cardDetailsContainer}>
        <Text style = {Styles.headingText}>
        $Name
        </Text>
        <Text style = {Styles.descriptionText}>
        The planet is inhabited by $population creatures . The terrain is $Terrain. With orbital period of  $orbital_period  of around its local star.
        </Text>
      </View>
    </View>
  )
}

export default PlanetsCard;