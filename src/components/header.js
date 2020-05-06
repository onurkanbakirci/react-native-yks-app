import React from "react";
import {View, StyleSheet , Dimensions} from "react-native" ;
import FontAwesome from "react-native-vector-icons/FontAwesome"//icon
const {width,height} = Dimensions.get("window")

export default class Header extends React.Component{
    constructor(props) {
        super(props)
    }
    render(){
    const {header,icon} = style
    const {go_home,go_saved,navigation} = this.props
    return(

        <View style={header}>
            <FontAwesome style={icon} name="bars" size={30} color="#32bbe3" onPress={go_home}/>
            <FontAwesome style={icon} name="folder-open" size={30} color="#32bbe3" onPress={go_saved} />
        </View>
    );
}
}
const style= StyleSheet.create({
    header:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:20,
        height:height/15,
        width:width-20,
        borderRadius:20,
        backgroundColor:"white",
         shadowOffset:{width:1,height:1},
        shadowColor:'gray',
        shadowOpacity:1,
        ...Platform.select({
        android: {
            elevation: 5,
        },
        }), 
        
    },
    icon:{
        marginLeft:20
    }
})
