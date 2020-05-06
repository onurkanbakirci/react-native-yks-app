import React from "react"
import {Easing,View,Text} from 'react-native'
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator,TransitionPresets,CardStyleInterpolators} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
//stack screeens
import HomeScreen from "../screens/homescreen"
import TytScreen from "../screens/tytscreen"
import Choice from "../screens/departmans/choice"
import Say from "../screens/departmans/say"
import Soz from "../screens/departmans/soz"
import Ea from "../screens/departmans/ea"
import Dil from "../screens/departmans/dil"
import Universities from "../screens/universities"
import Uni_details from "../screens/uni_details"
import Bolums from "../screens/bolums"
import Filter from '../screens/filter'
import Bolum_details from '../screens/bolum_details'
import Filterdetails from '../screens/filter_details'
//drawer screens
import Saveduni from '../screens/drawer_screens/saved_uni'
import {DrawerContent} from '../screens/drawer_screens/drawer_content'
//redux 
import {Provider} from "react-redux"
import store from "../store/store/combined";
import { TouchableOpacity, TouchableHighlight } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const config = {
  animation: 'timing',
  config: {
    duration:200,
    easing:Easing.linear,
    useNativeDriver:true
  },
};
const openconfig = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 1000,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

export default function Second (){
    return(
    <NavigationContainer>
      <Provider store={store}>
            <Drawer.Navigator screenOptions={{headerShown:false,gestureEnabled: true,gestureDirection:"horizontal",cardStyleInterpolators:CardStyleInterpolators.forHorizontalIOS}} drawerContent={ (props) => <DrawerContent {...props} /> }>
            {/*<Stack.Screen name="Home" component={HomeScreen}  />
            <Stack.Screen name="Choices"  component={Choice} />
            <Stack.Screen name="Tyt"  component={TytScreen}/>
            <Stack.Screen name="Say"  component={Say} />
            <Stack.Screen name="Dil"  component={Dil} />
            <Stack.Screen name="Soz"  component={Soz} />
            <Stack.Screen name="Ea"  component={Ea} />
            <Stack.Screen name="Universities"  component={Universities} />
            <Stack.Screen name="uni_details"  component={Uni_details} />
            <Stack.Screen name="Bolums"  component={Bolums} />
            <Stack.Screen name="Filter"  component={Filter} />
            <Stack.Screen name="bolum_datails"  component={Bolum_details} />
            <Stack.Screen name="saved" component={Saveduni} />*/}
            <Drawer.Screen name="route" component={Container} />
    </Drawer.Navigator>
    </Provider>
      </NavigationContainer>
  )
}

export function Container() {
    return (
          <Stack.Navigator animation="fade" screenOptions={{headerShown:false,gestureEnabled: true,gestureDirection:"horizontal",cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,transitionSpec:{open:openconfig,close:openconfig}}}  >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Choices"  component={Choice} />
            <Stack.Screen name="Tyt"  component={TytScreen} />
            <Stack.Screen name="Say"  component={Say} />
            <Stack.Screen name="Dil"  component={Dil} />
            <Stack.Screen name="Soz"  component={Soz} />
            <Stack.Screen name="Ea"  component={Ea} />
            <Stack.Screen name="Universities"  component={Universities} />
            <Stack.Screen name="uni_details"  component={Uni_details} />
            <Stack.Screen name="Bolums"  component={Bolums} />
            <Stack.Screen name="Filter"  component={Filter} />
            <Stack.Screen name="bolum_datails"  component={Bolum_details} />
            <Stack.Screen name="filter_datails"  component={Filterdetails} />
            <Stack.Screen name="saved" component={Saveduni}  />

          </Stack.Navigator>
      
    );
  }

  
  