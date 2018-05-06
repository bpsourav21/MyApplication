import React, { Component } from 'react';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { connect } from "react-redux";
import { List, ListItem } from 'react-native-elements'
import { getAllContents, selectOneItem } from '../actions/contentAction'

class Content extends Component {
    constructor(props) {
        super(props)
        this.state = { list: [] }
        this.props.dispatch(getAllContents())
    }
    componentWillReceiveProps(newprops) {
        this.setState({
            list: newprops.getAllContents.list
        })
    }
    convertTemp(temp) {
        var str = ''
        var number = (temp - 273.15)
        var celcius = Math.round(Number(number))
        str = celcius + ' °C'
        return str
    }
    itemPressed(item) {
        // console.log(item)
        this.props.dispatch(selectOneItem(item, ()=> {
             this.props.navigation.navigate('MapView')
        }))
    }
    render() {
        var list = this.state.list
        return (
            <View style={styles.container}>
                <ScrollView>
                    <List containerStyle={{ backgroundColor: "#fff", marginTop: 0 }}>
                        {
                            list.map((l, i) => (
                                <ListItem
                                    key={i}
                                    title={<Text style={styles.titleStyle}> {l.name}</Text>}
                                    subtitle={<Text style={styles.subText}> {l.weather[0].main}</Text>}
                                    rightTitle={this.convertTemp(l.main.temp)}
                                    rightTitleStyle={styles.tempStyle}
                                    hideChevron={true}
                                    onPress={() => this.itemPressed(l)}
                                />
                            ))
                        }
                    </List>
                </ScrollView>
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