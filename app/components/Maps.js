import React, { Component } from 'react';
import { connect } from "react-redux";
import { Dimensions, Platform, StyleSheet, Text, View, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const { width, height } = Dimensions.get('window')
const aspect_ratio = width / height
const Latitude_Delta = 0.015
const Longitude_Delta = Latitude_Delta * aspect_ratio

class Maps extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      latitude: props.selectItem.coord.lat,
      longitude: props.selectItem.coord.lon
    }
  }
  componentWillReceiveProps(newProps) {
    this.setState({
      latitude: newProps.selectItem.coord.lat,
      longitude: newProps.selectItem.coord.lon
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: Latitude_Delta,
            longitudeDelta: Longitude_Delta,
          }}
          zoomEnabled={true}
          minZoomLevel={5}
          maxZoomLevel={20}
          showsUserLocation={true}
          loadingEnabled={true}
        >
          <MapView.Marker
            coordinate={{
              latitude: this.state.latitude,
              longitude: this.state.longitude
            }}
            pinColor={'red'}
            title={"User's Location"}
          />
        </MapView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

// ======================== REDUX CONNECTORS ========================
const mapStateToProps = (state) => {
  return {
    selectItem: state.content.selectItem
  };
};
export default connect(mapStateToProps)(Maps);


// google map and gradle settings documentation: 
// "https://itnext.io/install-react-native-maps-with-gradle-3-on-android-44f91a70a395"
// "https://gist.github.com/nazrdogan/87c63e89a2bfd4cefee24990e4e7ed0e"