import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const Wrapper = styled.View`
    height: ${HEIGHT}px;
`;
const Text = styled.Text`
  font-size: 20px;
`;

const Basic = () => {
    return(
        <Wrapper>
          <Text>This is basic page</Text>
        </Wrapper>
    );
}

export default Basic;