import React, { Component } from 'react';
import { connect } from "react-redux";
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements'


class MapContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectItem: props.selectItem
        }
    }
    componentDidMount(props) {
    }
    convertTemp(temp) {
        var str = ''
        var number = (temp - 273.15)
        var celcius = Math.round(Number(number))
        str = celcius + ' °C'
        return str
    }
    render() {
        var selectItem = this.state.selectItem
        return (
            <View style={styles.container}>
                <View style={styles.mapContainer}>
                    <Image
                        // style={{ height: 250 }}
                        // resizeMode="cover"
                        source={require('./../pic.jpg')}
                    />
                </View>
                <View style={styles.textContainer}>
                    <View style={styles.colContainer}>
                        <View style={styles.col1}>
                            <Text style={{ fontSize: 24, fontWeight: "bold", color: "#000" }}>{selectItem.name} </Text>
                            <Text style={{ fontSize: 20, }}>{selectItem.weather[0].description}</Text>
                            <Text style={{ fontSize: 16, }}>Humidity: {selectItem.main.humidity} </Text>
                            <Text style={{ fontSize: 16, }}>Wind Speed: {selectItem.wind.speed} </Text>
                            <Text style={{ fontSize: 16, }}>Max Temp: {this.convertTemp(selectItem.main.temp_max)} </Text>
                            <Text style={{ fontSize: 16, }}>Min Temp: {this.convertTemp(selectItem.main.temp_min)} </Text>
                        </View>
                        <View style={styles.col2}>
                            <Text style={{ fontSize: 32, fontWeight: "bold", color: "#000" }}>
                                {this.convertTemp(selectItem.main.temp)}
                            </Text>
                            <Image
                                style={{ width: 100, height: 100, marginTop: -20}}
                                source={{ uri: "http://openweathermap.org/img/w/"+selectItem.weather[0].icon+".png" }}
                            />
                            <Text style={{ fontSize: 18, }}>{selectItem.weather[0].main}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    mapContainer: {
        flex: 4,
    },
    textContainer: {
        flex: 2,
        padding: 20,
        backgroundColor: '#fffffe',
    },
    colContainer: {
        flex: 1,
        flexDirection: "row",
    },
    col1: {
        flex: 2,
    },
    col2: {
        flex: 1,
        alignItems:"center"
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
// ======================== REDUX CONNECTORS ========================
const mapStateToProps = (state) => {
    return {
        selectItem: state.content.selectItem
    };
};
export default connect(mapStateToProps)(MapContent); 