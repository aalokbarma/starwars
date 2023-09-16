import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Styles from './styles';
import rocket from '../../Assets/Images/rocket.png';

const StarshipsCard = ({item}: any) => {
  return (
    <View style = {Styles.starshipsCardMainContainer}>
      <View style = {Styles.cardImageContainer}>
        <Image 
          style = {Styles.cardImage}
          source={{uri: 'https://picsum.photos/200/300'}}
        />
      </View>
      <View style = {Styles.cardDetailsContainer}>
        <View style = {Styles.topRowContainer}>
          <View style = {Styles.headerLeftColumn}>
            <Text style = {Styles.cardHeading}>
            {item.item.name}
            </Text>
            <Text style = {Styles.cardSubHeading}>
            {item.item.model} - {item.item.starship_class}
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
          <Text style = {Styles.ratingsText} numberOfLines={1}>
          {item.item.manufacturer} - {item.item.hyperdrive_rating}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default StarshipsCard;