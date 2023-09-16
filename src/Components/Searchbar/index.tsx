import { View, Text, TextInput, Image } from 'react-native';
import React, { useState } from 'react';
import Styles from './styles';
import searchIcon from '../../Assets/Images/search.png';

const Searchbar = () => {
    const [search, setSearch] = useState('');
  return (
    <View style = {Styles.searchbarContainer}>
      <View style = {Styles.mainSearchbar}>
        <TextInput 
            style= {Styles.searchBarInput}
            placeholder='Search characters'
            value={search}
            onChangeText={setSearch}
            placeholderTextColor={"#A4A9B5"}
        />
        <Image 
            style = {Styles.searchIcon}
            source={searchIcon}
        />
      </View>
    </View>
  )
}

export default Searchbar;