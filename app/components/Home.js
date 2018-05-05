import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    static navigationOptions = {
        headerMode: "none"
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}> Welcome to React Native!</Text>
                <Button
                    title="Go to Content"
                    onPress={() => this.props.navigation.navigate('Main')}
                />
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

export default Home