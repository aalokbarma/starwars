import { View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import Styles from './styles';
import FilmsCard from '../../Components/FilmsCard';
import axios from 'axios';

const FilmsScreen = () => {
  const [filmsData, setFilmsData] = useState([]);

  useEffect(() => { 
    axios.get('https://swapi.dev/api/films')
    .then(response => {
      setFilmsData(response.data.results)
    })
    .catch(error => {
      console.error(error);
    });
  }, [])
  return (
    <View style = {Styles.filmsScreenMainContainer}>
      <FlatList 
          data={filmsData}
          renderItem={(item) => <FilmsCard item = {item} />}
          showsVerticalScrollIndicator = {false}
      />
    </View>
  )
}

export default FilmsScreen;