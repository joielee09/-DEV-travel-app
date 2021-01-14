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
  /* background-color:lightblue; */
`;
const MuslimImage = styled.Image`
  width: 50px;
  height: 50px;
  margin: auto auto;
  margin-left: 8px;
`;
const ImageContainer = styled.View`
  width: 50px;
  height: ${HEIGHT*0.1}px;
  margin-right: 10px;
  /* background-color:lightblue; */
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
  width: ${WIDTH*0.52}px;
  margin: 0px;
  padding-left: 10px;
  /* background-color:lightpink; */
`;

const ListElement = ({ cur }) => {
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
        {/* <Title>{cur.title<22? cur.title : cur.title.slice(0,19) }</Title> */}
        <Information>
          {`${cur.address}\n☎ ${cur.telephone}`}
        </Information>
        </TextContainer>

        <TouchableOpacity onPress={goToDetail}>
        <ImageContainer>
        <Image 
          source={ require('../../../assets/icon/information.png') }
        />
        </ImageContainer>
        </TouchableOpacity>
        </List>
      </Wrapper>
    );
}

export default ListElement;