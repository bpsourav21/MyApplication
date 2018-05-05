import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { connect } from "react-redux";
import { List, ListItem } from 'react-native-elements'
import {getAllContents} from '../actions/contentAction'

// const list = [
//     {
//         name: 'Amy Farha',
//         sub: "cloudy",
//         temp: 23
//     },
//     {
//         name: 'Chris Jackson',
//         sub: "sunny",
//         temp: 22
//     },
//     {
//         name: 'Chris hansman',
//         sub: "cloudy",
//         temp: 24
//     },
// ]

class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {list:[]}
        this.props.dispatch(getAllContents())
    }
    componentWillReceiveProps(newprops){
        this.setState({
            list: newprops.getAllContents.list
        })
    }
    itemPressed(item){
        console.log(item)
    }
    render() {
        var list= this.state.list
        return (
            <View style={styles.container}>
                <List containerStyle={{ backgroundColor:"#fff", marginTop: 0 }}>
                    {
                        list.map((l, i) => (
                            <ListItem
                                key={i}
                                title={<Text style={styles.titleStyle}> {l.name}</Text>}
                                subtitle={<Text style={styles.subText}> {l.weather[0].main}</Text>}
                                rightTitle= {l.main.temp- 273.15  + ' °C' }
                                rightTitleStyle={styles.tempStyle}
                                hideChevron={true}
                                onPress={()=>this.itemPressed(l)}
                            />
                        ))
                    }
                </List>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#fff',
    },
    titleStyle: {
        fontSize: 20,
        color: "#001"
    },
    tempStyle: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#022"
    },
    subText: {
        color: 'grey'
    }
});

// ======================== REDUX CONNECTORS ========================
const mapStateToProps = (state) => {
    return {
        getAllContents: state.content.getAllContents
    };
};
export default connect(mapStateToProps)(Content); 