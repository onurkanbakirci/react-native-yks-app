import React from "react";
import {View, StyleSheet ,Text, Dimensions,TextInput,TouchableOpacity,Keyboard} from "react-native" ;
//icon
import FontAwesome from "react-native-vector-icons/FontAwesome"

const {width,height} = Dimensions.get("window")

export default class Search extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            txt_inp:""
        }
        //this.txt_inp = React.createRef();

    }
    txt_inp_clear(){
        this.txt_inp.clear()
        Keyboard.dismiss()
    }
    focus(){
        this.txt_inp.focus()
    }
    
    render(){
    const {txt_inp_sty,icon_style,seach_section,search} = style
    const {txt_inp} = this.state
    const {place_text} = this.props
    return(
            <View style={search}>
                <TouchableOpacity onPress={()=>this.focus()}>
                    <FontAwesome style={icon_style} name="search" size={40} color="black" />
                </TouchableOpacity>
                <TextInput ref={(input) => { this.txt_inp = input; }} onChangeText={this.props.search_data} style={txt_inp_sty} defaultValue={txt_inp} placeholder={place_text} ></TextInput>
                <TouchableOpacity onPress={()=>this.txt_inp_clear()}>
                    <FontAwesome style={icon_style} name="times-circle" size={40} color="black" />
                </TouchableOpacity>
            </View>
    );
}
}
const style= StyleSheet.create({
    seach_section:{
        backgroundColor:"#32bbe3",
        height:width/8,
        width:width,
        alignItems:"center",
        position:"absolute",
    },
    search:{
      flexDirection:"row",
      backgroundColor:"white",
      position:"absolute",
      top:75,
      height:50,
      width:width/1.2,
      shadowOffset:{width:1,height:1},
      shadowColor:'white',
      shadowOpacity:1,
      ...Platform.select({
              android: {
              elevation: 10,
          },
          }),
      
      borderRadius:10,
      alignItems:"center",
    },
    icon_style:{
        marginHorizontal:10
    },
    txt_inp_sty:{
        flex:1,
    }
})