import React, { useState } from "react";
import styled from "styled-components/native";
import { Dimensions, Text } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import ListElement from "../../common/ListElement";
import MapView, { Marker } from 'react-native-maps';
import * as API from '../../../API';
import {prayer_place} from '../../../API';
import {randomColor} from '../utility';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const Wrapper = styled.View`
    height: ${HEIGHT}px;
`;
const MapContainer = styled.View`
  width: ${WIDTH}px;
  height: ${HEIGHT*0.52}px;
`;
const Map = styled.View`
  background-color: lightpink;
  margin: auto;
  box-shadow: 2px 2px 2px gray;
`;
const ListContainer = styled.View`
  width: ${WIDTH}px;
  height: ${HEIGHT*0.31}px;
`;
const List = styled.View`
  width: ${WIDTH}px;
  background-color: #CFDEE7;
  margin: auto;
  padding-top: 10px;
  padding-bottom: 10px;
`;
const Element = styled.View`
`;
const MapComponent = ( cur ) => {
  const api_number = cur.route.params.cur.id;
  // console.log("api: ", API);

  if (api_number===1) {
    api = API.prayer_place;
  }
  else if (api_number===2) {
    api = API.halal_restaurant;
  }
  else if (api_number===3) {
    api = API.coffee_place;
  }
  else if (api_number===4) {
    api = API.touristic_location;
  }
  else if (api_number===5) {
    api = API.shop_location;
  }
  else {
    api = API.hotel_location;
  }

  const mapWidth = WIDTH;
    const mapHeight = HEIGHT*0.52;
    const [location, setLocation] = useState({
      latitude: 37.565666,
      longitude: -126.976977,
    });
    const mapView = React.createRef();

    const animateMap = (latitude, longitude) => {
      mapView.current.animateToRegion({ // Takes a region object as parameter
        latitude: latitude,
      longitude: longitude,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
      },1000);
    }
    
     const animateMap2 = () => {
      mapView.current.animateToRegion({ // Takes a region object as parameter
        latitude: 37.447441,
        longitude: 126.452610,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      },1000);
    }

    return(
        <Wrapper>
          <MapContainer>
          <MapView
          style={{flex: 1}}
          initialRegion={{
            latitude: 37.565666,
            longitude: 126.976977,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
          ref={mapView}
          // onPress={()=>console.log("map pressed")}
          >
            {api.map(cur=>(
              <Marker
                coordinate={{ latitude: cur.position[0], longitude: cur.position[1] }}
                title={cur.title}
                description={cur.telephone}
                key={cur.id}
                pinColor={randomColor()}
              />
            ))}
          </MapView>
          </MapContainer>
          {/* <TouchableOpacity onPress={animateMap2}><Text>Start</Text></TouchableOpacity> */}

          <ListContainer>
            <List>
            <ScrollView>
              {api.map(cur=>
              <Element
                key={cur.id+1000}
              >
              <TouchableOpacity onPress={()=>{
                console.log(cur.position);
                animateMap(cur.position[0], cur.position[1]);
                setLocation(cur.position);
              }} >
                <ListElement
                  key={cur.id}
                  cur={cur}
                />
              </TouchableOpacity>
              </Element>
              )}
            </ScrollView>
            </List>
          </ListContainer>
        </Wrapper>
    );
}

export default MapComponent;