import React, { Component } from 'react';
import { connect } from "react-redux";
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements'


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount(props) {
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}> WeatherApp</Text>
                <Button
                    small
                    backgroundColor='#03A9F4'
                    fontFamily='Roboto'
                    buttonStyle={styles.button}
                    title='VIEW NOW'
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
        // alignItems: 'center',
        backgroundColor: '#fafafa',
    },
    welcome: {
        fontFamily: 'Roboto',
        fontSize: 34,
        textAlign: 'center',
        color: "#00804A",
        fontWeight: "bold"
    },
    button: {
        borderRadius: 10,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20
    }
});
// ======================== REDUX CONNECTORS ========================
const mapStateToProps = (state) => {
    return {
    };
};
export default connect(mapStateToProps)(Home); 