import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { connect } from "react-redux";
import { List, ListItem } from 'react-native-elements'

const list = [
    {
        name: 'Amy Farha',
        sub: "cloudy",
        temp: 23
    },
    {
        name: 'Chris Jackson',
        sub: "sunny",
        temp: 22
    },
    {
        name: 'Chris hansman',
        sub: "cloudy",
        temp: 24
    },
]

class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    itemPressed(item){
        console.log(item)
    }
    render() {
        return (
            <View style={styles.container}>
                <List containerStyle={{ backgroundColor:"#fff", marginTop: 0 }}>
                    {
                        list.map((l, i) => (
                            <ListItem
                                key={i}
                                title={<Text style={styles.titleStyle}> {l.name}</Text>}
                                subtitle={<Text style={styles.subText}> {l.sub}</Text>}
                                rightTitle={<Text style={styles.tempStyle}> {l.temp} °C </Text>}
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
    };
};
export default connect(mapStateToProps)(Content); 