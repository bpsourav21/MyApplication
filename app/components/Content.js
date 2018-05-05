import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';


class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    static navigationOptions = {
        title: 'Content',
      };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}> Welcome to React Native!</Text>
                <Text style={styles.instructions}>  To get started, edit App.js  </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default Content