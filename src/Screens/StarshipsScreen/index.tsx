import { View, Text } from 'react-native';
import React from 'react';
import Styles from './styles';
import StarshipsCard from '../../Components/StarshipsCard';

const StarshipsScreen = () => {
  return (
    <View style = {Styles.starshipsScreenMainContainer}>
      <StarshipsCard />
    </View>
  )
}

export default StarshipsScreen;