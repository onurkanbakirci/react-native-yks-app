import React from 'react'
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native'
//icon
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function Label (props){
        let { main,txt ,icn_style}  = style
        let {label_txt,pressed,icn_name} = props
        return(
            <TouchableOpacity onPress={pressed}>
                <View style={main}>
                    <FontAwesome style={icn_style} size={30} name={icn_name} color={"white"} />
                    <Text style={txt}>{label_txt}</Text>
                </View>
            </TouchableOpacity>
        )
    
}
const style = StyleSheet.create({
    main:{
        width:270,
        height:50,
        borderRadius:5,
        borderColor:"gray",
        borderWidth:1,
        marginVertical:3,
        marginHorizontal:2,
        alignItems:"center",
        backgroundColor:"#32bbe3",
        flexDirection:"row",

    },
    txt:{
        color:"white",
        fontSize:20,
        marginHorizontal:10

    },
    icn_style:{
        marginLeft:5
    }
    
})