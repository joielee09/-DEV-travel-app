import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Swiper from "react-native-swiper";

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
const Text = styled.Text``;
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
    return(
        <ScrollView>
        <Wrapper>
          <Container>
          <Swiper
            autoplay={true}
            showsPagination={false}
          >
            {images.map(cur=>
              <Image source={{ uri:cur }} />
            )}
          </Swiper>
          </Container>
          <InformationContainer>
            <Title>{place_name}</Title>
            <Text/>
            <BoldText>Address</BoldText>
            <Text>{address}</Text>
            <Text/>
            <BoldText>Telephone</BoldText>
            <Text>{telephone}</Text>
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
            <BoldText>Homepage</BoldText>
            <Text>{homepage}</Text>
            <Text/>
            <BoldText>Description</BoldText>
            <Text>{summary}</Text>
          </InformationContainer>
        </Wrapper>
        </ScrollView>
    );
}

export default Detailed;