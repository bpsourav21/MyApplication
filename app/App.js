import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation'
import Content from './components/Content';
import Home from './components/Home';

const RootNavigator = StackNavigator({
  Home: { screen: Home },
  Main: { screen: Content },
}, {
    initialRouteName: "Home",
    //headerMode:"none",
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#00804A',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontFamily:'Roboto'
      },
  }
}
);

class App extends Component {
  render() {
    return <RootNavigator />
    
  }
}

export default App