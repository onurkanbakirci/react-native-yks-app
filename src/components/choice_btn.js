import React from "react";
import {View,Text, StyleSheet , Dimensions,TouchableOpacity} from "react-native" ;

const {width,height} = Dimensions.get("window")

export default function Choice_btn(props){

    const {touch,depart_txt} = style
    const {handler_screen,depart_text} = props
    return(

        <TouchableOpacity style={touch} onPress={()=>handler_screen()}>
            <Text style={depart_txt}>{depart_text}</Text>
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
        height:100,
        width:100,
        borderRadius:200,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
        marginVertical:10
      
    },
    depart_txt:{
        fontSize:40,
        textAlign:"center",
        color:"#32bbe3"
    }
})