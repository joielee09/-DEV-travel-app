import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import Button from '../../common/Button';
import { menu } from '../../../API';
import Swiper from 'react-native-swiper'

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const Wrapper = styled.View`
    height: ${HEIGHT}px;
`;
const Text = styled.Text`
  font-size: 20px;
`;
const BtnContainer = styled.View`
  width: ${WIDTH}px;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
`;
const ImageContainer = styled.View`
  width: ${WIDTH}px;
  height: ${HEIGHT/2.2}px;
  /* box-shadow: 5px 5px 5px black; */
`;
const Image = styled.Image`
  width: ${WIDTH*0.95}px;
  height: ${WIDTH*0.7}px;
  border-radius: 5px;
  /* margin: auto; */
  margin: auto;
  box-shadow: 5px 5px 5px black;
`;
const Landing = () => {
    return(
        <Wrapper>
          <ImageContainer>
          <Swiper
            autoplay={true}
            // showsButtons={true}
            autoplayTimeout={3}
            showsPagination={false}
          >
            <Image 
              source={{ uri:'https://www.agoda.com/wp-content/uploads/2019/03/N-Seoul-Tower-Namsan-Cable-Car.jpg' }}
            />
            <Image 
              source={{ uri:'https://www.theinvisibletourist.com/wp-content/uploads/2019/08/featured_114.jpg' }}
            />
            <Image 
              source={{ uri:'https://images.summitmedia-digital.com/female/images/2018/01/02/01032018_OP_SKoreaBudget.jpg' }}
            />
            <Image 
              source={{ uri:'https://i2.wp.com/www.agoda.com/wp-content/uploads/2019/05/Seoul-itinerary-Seoul-Bukchon-Hanok-Village.jpg' }}
            />
            <Image 
              source={{ uri:'https://ewscripps.brightspotcdn.com/dims4/default/fcc1198/2147483647/strip/true/crop/640x360+0+60/resize/1280x720!/quality/90/?url=https%3A%2F%2Fsharing.news5cleveland.com%2Fsharescnn%2Fphoto%2F2018%2F01%2F08%2FS087947779_1515460480171_75627129_ver1.0_640_480.JPG' }}
            />
            <Image 
              source={{ uri:'https://ak.picdn.net/shutterstock/videos/14823718/thumb/1.jpg' }}
            />
            <Image 
              source={{ uri:'https://i.pinimg.com/originals/2a/bd/c8/2abdc8d4329111b43e4dcdb1f5bb0ec4.jpg' }}
            />
            <Image 
              source={{ uri:'https://s.yimg.com/uu/api/res/1.2/jYUYdvXGWH5H0cOcfQoOww--~B/aD01NTE7dz04MDA7c209MTthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en-US/reuters.com/8aba0f6589282522384fd4e329d01e82' }}
            />
            <Image 
              source={{ uri:'https://static.wixstatic.com/media/0505b9_c5ea3744406d41babe8f43b0e4d0b177~mv2.jpg/v1/fill/w_980,h_590,al_c,q_85,usm_0.66_1.00_0.01/Ttukseom%20Hangang%20Park%20-%20Duck%20Boats%20at%20Ha.webp' }}
            />
            <Image 
              source={{ uri:'https://images.squarespace-cdn.com/content/v1/56450c91e4b01b92d1f9fa6d/1560148922229-FYCMMV1CD573XMRX7RBU/ke17ZwdGBToddI8pDm48kOggE0Ch6pMGalwtLMqzsSB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ufo5RWkg_J4of0jUNHaDHx6pZKBvpVYzidBWCapg0tuoMuEaB2HPGSYDV-11UTcW2g/gwanghwamun-636113_1920.jpg' }}
            />
          </Swiper>
          </ImageContainer>
          <BtnContainer>
            {menu.map(cur=>(
              <Button 
                key={cur.id}
                cur={cur}
              />
            ))}
          </BtnContainer>
        </Wrapper>
    );
}
export default Landing;