import React from "react";
import {View, StyleSheet , Dimensions,TouchableOpacity} from "react-native" ;
import FontAwesome from "react-native-vector-icons/FontAwesome"//icon
const {width,height} = Dimensions.get("window")

export default function Direction_btn(props){

    const {touch} = style
    const {icon_name,handler_screen,style_parent} = props
    return(
        <TouchableOpacity style={[touch,style_parent]} onPress={()=>handler_screen()}>
            <FontAwesome name={icon_name} size={40} color="#32bbe3"/>
        </TouchableOpacity>     
);


}
const style= StyleSheet.create({
    touch:{
        shadowOffset:{width:1,height:1},
        shadowColor:'gray',
        shadowOpacity:1,
        ...Platform.select({
        android: {
            elevation: 10,
        },
        }),
        height:80,
        width:80,
        borderRadius:160,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
        marginHorizontal:10,
        
    }
})