import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { Button } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const Wrapper = styled.View`
  box-shadow: 2px 2px 2px gray;
`;
const WhiteSpace = styled.View`
  height: 10px;
`;

const ButtonElement = ({ cur }) => {
  // console.log("cur in button: ", cur);
  const navigation = useNavigation();
  const goToRouter = (cur) => {
    navigation.navigate('Map',{ cur });
  }

    return(
      <Wrapper>
        <Button
          iconRight
          title={cur.title}
          raised
          buttonStyle={{ 
            backgroundColor:'#D0DEE7',
            width: WIDTH/3-10,
            height: 80,
            borderRadius: 20 ,
          }}
          titleStyle={{
            color: 'black',
            fontSize: 11
          }}
          onPress={()=>goToRouter(cur)}
        />
        <WhiteSpace />
      </Wrapper>
    );
}

export default ButtonElement;