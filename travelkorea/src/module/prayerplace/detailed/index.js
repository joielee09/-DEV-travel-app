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
        utility
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
            <Image source={{ uri:'https://www.coex.co.kr/blog/coex-reference/2500?reference_action=download&idx=2501' }} />
            <Image source={{ uri:'https://image.chosun.com/sitedata/image/201707/10/2017071001894_0.jpg' }} />
            <Image source={{ uri:'https://www.coex.co.kr/blog/coex-reference/726?reference_action=download&idx=727' }} />
            <Image source={{ uri:'https://www.econovill.com/news/photo/202008/410103_342660_255.jpg' }} />
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