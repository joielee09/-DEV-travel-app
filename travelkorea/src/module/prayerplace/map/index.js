import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ListElement from "../../../common/ListElement";
import MapView, { Marker } from 'react-native-maps';
import { prayer_place } from '../../../../API';

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
  height: ${HEIGHT*0.46}px;
  background-color: #CFDEE7;
  margin: auto;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const MapComponent = () => {
    
  const mapWidth = WIDTH;
    const mapHeight = HEIGHT*0.52;

    return(
        <Wrapper>
          <MapContainer>
          <MapView 
            width={mapWidth}
            height={mapHeight}
            initialRegion={{ 
              latitude: 37.565666,
              longitude: 126.976977,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421, 
            }}
          >
            {prayer_place.map(cur=>(
              <Marker
                coordinate={{ latitude: cur.position[0], longitude: cur.position[1] }}
                title={cur.title}
                // description={cur.summary}
                key={cur.id}
              />
            ))}
          </MapView>
          </MapContainer>
          <ListContainer>
            <List>
            <ScrollView>
              {prayer_place.map(cur=>
                <ListElement 
                  key={cur.id}
                  cur={cur}
                />
              )}
            </ScrollView>
            </List>
          </ListContainer>
        </Wrapper>
    );
}

export default MapComponent;