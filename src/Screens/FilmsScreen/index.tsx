import { View, Text } from 'react-native';
import React from 'react';
import Styles from './styles';
import FilmsCard from '../../Components/FilmsCard';

const FilmsScreen = () => {
  return (
    <View style = {Styles.filmsScreenMainContainer}>
      <FilmsCard />
    </View>
  )
}

export default FilmsScreen;