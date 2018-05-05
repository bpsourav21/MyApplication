import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation'
import Content from './components/Content';
import Home from './components/Home';

const RootNavigator = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions:
      { header: null }
  },
  Main: {
    screen: Content,
    navigationOptions:
      { title: "Content" }
  },
}, {
    initialRouteName: "Home",
    navigationOptions: {

      headerStyle: {
        backgroundColor: '#00804A',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        color: '#fff',
      },
      //  headerLeft: (<View><Text>Back</Text></View>),
      //  headerRight: (<View><Text>rrr</Text></View>)
    }
  }
);

class App extends Component {
  render() {
    return <RootNavigator />

  }
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})
export default App