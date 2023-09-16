import { View, Text } from 'react-native';
import React from 'react';
import Styles from './styles';
import PlanetsCard from '../../Components/PlanetsCard';

const PlanetsScreen = () => {
  return (
    <View style = {Styles.planetsScreenMainContainer}>
      <PlanetsCard />
    </View>
  )
}

export default PlanetsScreen;