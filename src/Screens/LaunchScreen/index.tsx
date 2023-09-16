import { View, Text, Image } from 'react-native';
import React from 'react';
import Styles from './styles';
import launchLogo from '../../Assets/Images/splashLogo.png';
import launchImage from '../../Assets/Images/splashImage.png';

const LaunchScreen = () => {
  return (
    <View style = {Styles.launchScreenContainer}>
      <View style = {Styles.launchHeader}>
        <Image 
          style = {Styles.launchLogo}
          source={launchLogo}
        />
      </View>
      <View style = {Styles.launchContent}>
        <Image 
          style = {Styles.launchImage}
          source={launchImage}
        />
        <View style = {Styles.launchDetails}>
          <Text style = {Styles.launchHeadertext}>
          Welcome to Star Wars Dashboard
          </Text>
          <Text style ={Styles.launchParaText}>
          Star Wars is an American epic space opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon.
          </Text>
        </View>
      </View>
    </View>
  )
}

export default LaunchScreen;