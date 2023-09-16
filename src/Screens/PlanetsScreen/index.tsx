import { View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import Styles from './styles';
import PlanetsCard from '../../Components/PlanetsCard';
import axios from 'axios';

const PlanetsScreen = () => {
  const [planetsData, setPlanetsData] = useState([]);

  useEffect(() => { 
    axios.get('https://swapi.dev/api/planets')
    .then(response => {
      setPlanetsData(response.data.results)
    })
    .catch(error => {
      console.error(error);
    });
  }, [])
  return (
    <View style = {Styles.planetsScreenMainContainer}>
      <FlatList 
          data={planetsData}
          renderItem={(item) => <PlanetsCard item = {item} />}
          showsVerticalScrollIndicator = {false}
      />
    </View>
  )
}

export default PlanetsScreen;