import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const Wrapper = styled.View`
  box-shadow: 2px 2px 2px gray;
`;
const List = styled.View`
  width: ${WIDTH*0.9}px;
  background-color: #fff;
  margin: 10px auto 0 auto;
  border-radius: 10px;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 10px;
  padding-bottom: 10px;
`;
const MuslimImageContainer = styled.View`
  /* width: 60px;
  height: ${HEIGHT*0.1}px;
  background-color: lightpink;
  position: absolute;
  left: 10px; */
`;
const MuslimImage = styled.Image`
  width: 60px;
  height: 60px;
  margin: auto auto;
`;
const ImageContainer = styled.View`
  width: 40px;
  height: ${HEIGHT*0.1}px;
  /* position: absolute;
  right: 10px; */
`;
const Image = styled.Image`
  width: 40px;
  height: 40px;
  margin: auto auto;
`;
const Title = styled.Text`
  font-size: 15px;
`;
const Information = styled.Text`
  font-size: 10px;
`;
const TextContainer = styled.View`
  width: ${WIDTH*0.57}px;
  height: ${HEIGHT*0.1}px;
  margin: auto auto;
`;

const ListElement = ({ cur }) => {
  console.log(cur);
  const navigation = useNavigation();
  const goToDetail = () => {
    navigation.navigate('Detailed',{ cur });
  }
    return(
      <Wrapper>
        <List>
        <MuslimImageContainer>
        <MuslimImage 
          source={ require('../../../assets/icon/muslim.png') }
        />
        </MuslimImageContainer>
        
        <TextContainer>
        <Title>{cur.title}</Title>
        <Information>
          {`${cur.address}\n☎ ${cur.telephone}`}
        </Information>
        </TextContainer>

        <ImageContainer>
        <TouchableOpacity onPress={goToDetail}>
        <Image 
          source={ require('../../../assets/icon/information.png') }
        />
        </TouchableOpacity>
        </ImageContainer>
        </List>
      </Wrapper>
    );
}

export default ListElement;