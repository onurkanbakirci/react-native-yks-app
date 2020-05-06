import React from "react";
import {View, StyleSheet ,Text, Dimensions,TextInput} from "react-native" ;

const {width,height} = Dimensions.get("window")

export default function Lessons (props){
    const {main_parent,main,lesson_title,true_circle,txt_inp} = style
    const {lesson_name,changing_true_text,changing_false_text} = props
    return(
        <View style={main_parent}>
            <View style={main}><Text style={lesson_title}>{lesson_name}</Text></View>
            <View style={true_circle}><TextInput onChangeText={changing_true_text} style={txt_inp} placeholderTextColor="#32bbe3" keyboardType="number-pad" maxLength={2} placeholder="D"></TextInput></View>
            <View style={true_circle}><TextInput onChangeText={changing_false_text} style={txt_inp} placeholderTextColor="#32bbe3" keyboardType="number-pad" maxLength={2} placeholder="Y"></TextInput></View>
        </View>
    );

}
const style= StyleSheet.create({
    main_parent:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        
    },
    main:{
        width:2*width/3,
        borderRadius:10,
        height:height/10-20,
        flexDirection:"row",
        shadowOffset:{width:1,height:1},
        shadowColor:'gray',
        shadowOpacity:1,
        ...Platform.select({
        android: {
            elevation: 10,
        },
        }), 
        backgroundColor:"#32bbe3",
        alignItems:"center",
        marginTop:20,
        justifyContent:"center"
    },
    lesson_title:{
        fontSize:20,
        color:"white"
    },
    
    lesson_title:{
        fontSize:20,
        color:"white"
    },
    true_circle:{
        shadowOffset:{width:1,height:1},
        shadowColor:'gray',
        shadowOpacity:1,
        ...Platform.select({
        android: {
            elevation: 10,
        },
        }),
        height:60,
        width:60,
        borderRadius:120,
        backgroundColor:"white",
        marginHorizontal:3,
        marginTop:20
    },
    txt_inp:{
        textAlign:"center",
        fontSize:25,
        color:"#32bbe3"
    }
    
})