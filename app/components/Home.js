import React, { Component } from 'react';
import { connect } from "react-redux";
import { WebView, StyleSheet, View } from 'react-native';


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
                <WebView
                    source={{uri: 'https://www.facebook.com'}}
                    style={{marginTop: 20}}
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