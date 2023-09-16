import { View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Styles from './styles';
import logo from '../../Assets/Images/logo.png';
import notification from '../../Assets/Images/notification.png';

const Header = () => {
  return (
    <View style = {Styles.headerMainContainer}>
      <Image 
        style = {Styles.appLogo}
        source = {logo}
      />
      <TouchableOpacity style = {Styles.notificationButtonContainer} onPress={() => {}}>
      <Image 
        style = {Styles.notificationIcon}
        source={notification}
      />
      </TouchableOpacity>
    </View>
  )
}

export default Header;