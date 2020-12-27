import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Landing from '../module/landing'
import Map from '../module/prayerplace/map'
import Detailed from '../module/prayerplace/detailed';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle:{
          backgroundColor:'#72AFD3'
        },
        headerTitleStyle: {
          fontSize: 12,
          justifyContent: 'center'
        },
        headerTintColor: 'white'
      }}
    >
      <Stack.Screen 
        name="Landing" 
        component={Landing} 
        options={{
          title: 'Travel Korea for muslim 😎',
          headerTintColor: '#fff'
        }}
      />
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="Detailed" component={Detailed} />
    </Stack.Navigator>
  );
}