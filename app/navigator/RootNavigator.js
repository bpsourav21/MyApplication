import { StackNavigator } from 'react-navigation'
import Content from '../components/Content';
import Home from '../components/Home';
import MapContent from '../components/MapContent';

const RootNavigator = StackNavigator({
    Home: {
      screen: Home,
      navigationOptions:
        { header: null }
    },
    Main: {
      screen: Content,
      navigationOptions:
        { title: "Weather" }
    },
    MapView:{
      screen: MapContent,
      navigationOptions:
        { title: "Map View" }
    }
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
  
  export default RootNavigator