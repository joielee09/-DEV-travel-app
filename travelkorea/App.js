import React from 'react';
import Stack from './src/navigation/Stack'
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
};