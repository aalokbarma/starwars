import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import Styles from './styles';
import CharacterCard from '../../Components/CharacterCard';
import axios from 'axios';

const PeopleScreen = () => {
  const [peopleData, setPeopledata] = useState([]);

  useEffect(() => { 
    axios.get('https://swapi.dev/api/people')
    .then(response => {
      setPeopledata(response.data.results)
    })
    .catch(error => {
      console.error(error);
    });
  }, [])

  return (
    <View style = {Styles.peopleScreenMainContainer}>
      <Text style = {Styles.allCharactersHeading}>All Characters</Text>
      <FlatList 
        data={peopleData}
        renderItem={(item) =>  <CharacterCard item = {item} />}
        keyExtractor={({item, index}) => index}
        showsHorizontalScrollIndicator = {false}
        showsVerticalScrollIndicator = {false}
        horizontal
      />
    </View>
  )
}

export default PeopleScreen;