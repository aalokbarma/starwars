import { View, Text } from 'react-native';
import React from 'react';
import Styles from './styles';
import CharacterCard from '../../Components/CharacterCard';
import DetailsPopupCard from '../../Components/DetailsPopupCard';

const PeopleScreen = () => {
  return (
    <View style = {Styles.peopleScreenMainContainer}>
      <CharacterCard />
      <DetailsPopupCard />
    </View>
  )
}

export default PeopleScreen;