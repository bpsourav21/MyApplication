import React, { Component } from 'react';
import { connect } from "react-redux";
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import MapView from 'react-native-maps';

// google map and gradle settings documentation: 
// "https://itnext.io/install-react-native-maps-with-gradle-3-on-android-44f91a70a395"
// "https://gist.github.com/nazrdogan/87c63e89a2bfd4cefee24990e4e7ed0e"

class Maps extends React.Component {
  render() {
    const { region } = this.props;
    console.log(region);

    return (
      <View style ={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
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
    };
};
export default connect(mapStateToProps)(Maps); 