import React from "react";
import styled from "styled-components/native";
import { Dimensions, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Swiper from "react-native-swiper";
import * as Linking from 'expo-linking';
import { Pressable } from "react-native";

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const Wrapper = styled.View``;
const Image = styled.Image`
  width: ${WIDTH*0.9}px;
  height: ${WIDTH*0.8}px;
  margin: auto auto;
`;
const Container = styled.View`
  width: ${WIDTH}px;
  height: ${WIDTH}px;
`;
const InformationContainer = styled.View`
  width: ${WIDTH*0.9}px;
  background-color: #FEFAFA;
  margin: auto auto;
`;
const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;
const PressableComponent = styled.View`
  display: inline-block;
`;
const PressableText = styled.Text`
  text-decoration: underline;
`;
const BoldText = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;

const Detailed = ({ 
  route:{
    params:{
      cur:{
        address,
        available_time,
        available_day,
        homepage,
        place_name,
        position,
        summary,
        telephone,
        title,
        utility,
        images
      }
    }
  }
}) => {
  const openHomepage = function (cur) {
    if(cur==='')  return;
    Linking.openURL(cur);
  };
  const openTelephone = function (telephone) {
    if(telephone==='')  return;
    Linking.openURL(`tel://${telephone}`)
  }
    return(
        <ScrollView>
        <Wrapper>
          <Container>
          <Swiper
            autoplay={true}
            showsPagination={false}
          >
            {images.map(cur=>
              <Image
                key={images.map(cur=>images.indexOf(cur))}
                source={{ uri:cur }} 
              />
            )}
          </Swiper>
          </Container>
          <InformationContainer>
            <Title>{place_name}</Title>
            <Text/>
            <BoldText>Address</BoldText>
            <Text>{address}</Text>
            <Text/>
            <Pressable 
              onPress={()=>openTelephone(telephone)}
              android_ripple={{color: '#72AFD3'}}
            >
            <BoldText>Telephone</BoldText>
            <PressableText>{telephone}</PressableText>
            </Pressable>
            <Text/>
            <BoldText>Available_time</BoldText>
            <Text>{available_time}</Text>
            <Text/>
            <BoldText>Available_day</BoldText>
            <Text>{available_day}</Text>
            <Text/>
            <BoldText>Utility</BoldText>
            <Text>{utility}</Text>
            <Text/>
            <Pressable 
              onPress={()=>openHomepage(homepage)}
              android_ripple={{color: '#72AFD3'}}
            >
            <BoldText>Homepage</BoldText>
            <PressableText>{homepage}</PressableText>
            </Pressable>
            <Text/>
            <BoldText>Description</BoldText>
            <Text>{summary}</Text>
          </InformationContainer>
        </Wrapper>
        </ScrollView>
    );
}

export default Detailed;