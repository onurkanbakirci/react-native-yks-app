import React from "react";
import {View, StyleSheet , Text, Dimensions,Animated,TouchableOpacity} from "react-native" ;
import FontAwesome from "react-native-vector-icons/FontAwesome"//icon
const {width,height} = Dimensions.get("window")


export default class Msbutton extends React.Component{
    constructor(props){
        super(props);
        this.state={
            shake:new Animated.Value(0)
        }
    }
    componentDidMount(){
        Animated.timing(this.state.shake,{
            toValue:1,
            duration:500,
            useNativeDriver:true
        }).start()
    }
    render(){
    const {button,text,touch} = style
    const {icn_name,title,handle_click} =this.props;
    const shake_it=this.state.shake.interpolate({
        inputRange:[0,.5,1],
        outputRange:["-10deg","10deg","0deg"]
    })
    return(
        <Animated.View style={[button,{transform:[{rotate:shake_it}]}]}>
        <TouchableOpacity style={touch} onPress={handle_click}>
            <FontAwesome name={icn_name} size={60} color={"#32bbe3"} />
            <Text style={text}>{title}</Text>
        </TouchableOpacity>
        </Animated.View>
    );
}
}
const style= StyleSheet.create({
    button:{width:width/3,
    height:width/3,
    shadowOffset:{width:1,height:1},
    backgroundColor:"white",
    shadowColor:'gray',
    shadowOpacity:1,
    ...Platform.select({
    android: {
        elevation: 5,
    },
    }), 
    borderRadius:10,
    marginHorizontal:10,
    justifyContent:"center",
    alignItems:"center"
},
text:{
    fontSize:20,
    color:"#32bbe3"
},
touch:{
    alignItems:"center",justifyContent:"center",
    width:width/3,
    height:width/3,
}
})