import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FilmsScreen from '../Screens/FilmsScreen';
import PeopleScreen from '../Screens/PeopleScreen';
import PlanetsScreen from '../Screens/PlanetsScreen';
import StarshipsScreen from '../Screens/StarshipsScreen';

const Tab = createMaterialTopTabNavigator();

const Navigations = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: { fontSize: 16, color: '#ffffff', textTransform: 'capitalize' },
                tabBarStyle: { backgroundColor: '#181818' },
                tabBarIndicatorStyle: {backgroundColor:'#ffffff', height: 3, borderRadius: 3,},
                tabBarIndicatorContainerStyle: {marginBottom: 5, width: '70%', marginLeft: '4%'}
              }}
        >
            <Tab.Screen name="People" component={PeopleScreen} />
            <Tab.Screen name="Films" component={FilmsScreen} />
            <Tab.Screen name="Planets" component={PlanetsScreen} />
            <Tab.Screen name="Starship" component={StarshipsScreen} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigations;