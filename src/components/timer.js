import React from "react";
import {View, StyleSheet , Text,Dimensions} from "react-native" ;
const {width,height} = Dimensions.get("window")

export default function Timer (){

    const tyt_time=new Date("07/25/2020");
    const now=new Date();
    const diff = tyt_time.getTime() - now.getTime(); 
    const last_time=(diff/( (1000 * 3600 * 24)))
    const {timer,text,text_day} = style
    return(

        <View style={timer}>
            <Text style={text}>{last_time.toFixed(0)}</Text>
            <Text style={text_day}>GÜN</Text>
        </View>
    );

}
const style= StyleSheet.create({
    timer:{
        justifyContent:"center",
        borderColor:"#32bbe3",
        borderWidth:1,
        borderRadius:width,
        height:width/2,
        width:width/2,
        backgroundColor:"white",
        shadowOffset:{width:1,height:1},
        shadowColor:'gray',
        shadowOpacity:1,
        ...Platform.select({
        android: {
            elevation: 5,
        },
        }), 
        marginBottom:20
    },
    text:{textAlign:"center",
    fontSize:80,
    color:"#32bbe3"
},
text_day:{
    textAlign:"center",
    fontSize:30,
    color:"#32bbe3"
}
})