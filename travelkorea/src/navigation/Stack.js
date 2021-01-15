import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Landing from '../module/landing';
import Map from '../common/map'
import Detailed from '../common/detailed';

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
        headerTintColor: 'white',
        headerTitle:""
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