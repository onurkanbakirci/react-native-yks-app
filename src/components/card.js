import React from "react";
import {View,Text, StyleSheet , Dimensions,TouchableOpacity,Animated} from "react-native" ;

const {width,height} = Dimensions.get("window")

export default class Card extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
             opac:new Animated.Value(0),
        }
    }
    componentDidMount(){
        Animated.timing(this.state.opac,{
            toValue:1,
            timing:1500,
            useNativeDriver: true,
        }).start()
    }
    render(){
    const {card_main,card_child,uni_text} = style
    const {name,handler_screen,style_parent} = this.props
    return(
        <Animated.View style={{opacity:this.state.opac}}>
        <TouchableOpacity style={[card_main]} onPress={()=>handler_screen()}>
            <View style={[card_child,style_parent]} >
                <Text style={uni_text}>{name}</Text>
            </View>    
        </TouchableOpacity>
        </Animated.View>
);

}
}
const style= StyleSheet.create({
   card_main:{
    width:width-10,
    borderRadius:10,
    height:50,
    flexDirection:"row",
    shadowOffset:{width:1,height:1},
    shadowColor:'gray',
    shadowOpacity:1,
    ...Platform.select({
    android: {
        elevation: 10,
    },
    }), 
    backgroundColor:"white",
    alignItems:"center",
    marginVertical:3,
    marginHorizontal:3,
    justifyContent:"center",
   },
   card_child:{
       flex:1,
       width:width-10,
    borderRadius:10,
    height:50,
    justifyContent:"center",
    alignItems:"center"
   },
   uni_text:{
       color:"black",
       textAlign:"center"

   }
})