import { View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import Styles from './styles';
import StarshipsCard from '../../Components/StarshipsCard';
import axios from 'axios';

const StarshipsScreen = () => {
  const [starshipsData, setStarshipsData] = useState([]);

  useEffect(() => { 
    axios.get('https://swapi.dev/api/starships')
    .then(response => {
      setStarshipsData(response.data.results)
    })
    .catch(error => {
      console.error(error);
    });
  }, [])
  return (
    <View style = {Styles.starshipsScreenMainContainer}>
      <FlatList 
          data={starshipsData}
          renderItem={(item) => <StarshipsCard item = {item} />}
          showsVerticalScrollIndicator = {false}
      />
      
    </View>
  )
}

export default StarshipsScreen;