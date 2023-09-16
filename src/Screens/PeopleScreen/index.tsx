import { View, Text } from 'react-native';
import React from 'react';
import Styles from './styles';
import CharacterCard from '../../Components/CharacterCard';

const PeopleScreen = () => {
  return (
    <View style = {Styles.peopleScreenMainContainer}>
      <CharacterCard />
    </View>
  )
}

export default PeopleScreen;