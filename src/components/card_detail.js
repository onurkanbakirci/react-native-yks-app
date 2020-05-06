import React from "react";
import {View,Text, StyleSheet , Dimensions,TouchableOpacity,Animated} from "react-native" ;
import FontAwesome from "react-native-vector-icons/FontAwesome"//icon
const {width,height} = Dimensions.get("window")

export default class Carddetails extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             anim:new Animated.Value(0)
        }
    }
    componentDidMount(){
        Animated.timing(this.state.anim,{
            toValue:1,
            duration:500,useNativeDriver:true
        }
        ).start()
    }
    
    render(){
    const {card_main,uni_text,uni,ek_acik,bolum,tur_view,puan_view,touch,button,button_section,sıra_view} = style
    const {uni_name,ek_aciklama,bolum_name,tur,puan,icn_name_one,siralama,save} = this.props
    return(
            <Animated.View style={[card_main,{opacity:this.state.anim}]}>
                <View style={uni}><Text style={uni_text}>{uni_name}</Text></View>
                <View style={ek_acik}><Text style={uni_text}>{ek_aciklama}</Text></View>
                <View style={bolum}><Text style={uni_text}>{bolum_name}</Text></View>
                <View style={tur_view}><Text style={uni_text}>{tur}</Text></View>
                <View style={puan_view}><Text style={uni_text}>Min. Puan / {puan}</Text></View>
                <View style={sıra_view}><Text style={uni_text}>Sıralama / {siralama}</Text></View>
                <View style={button_section}>
                    <TouchableOpacity style={touch} onPress={save}>
                        <View style={button}>
                                <FontAwesome name={icn_name_one} size={30} color={"#32bbe3"} />
                        </View>
                    </TouchableOpacity>
                </View>
        </Animated.View>
);
}
}


const style= StyleSheet.create({
   card_main:{
    width:width-10,
    borderRadius:10,
    height:200,
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
   uni_text:{
       textAlign:"center",
   },
   uni:{
      position:"absolute",
      top:20,
      height:20
   },
   ek_acik:{
    position:"absolute",
    top:50,
    height:20

   },
   bolum:{
    position:"absolute",
    top:80,
    height:20

   },
   tur_view:{
    position:"absolute",
    top:110,
    height:20
   },
   puan_view:{
    position:"absolute",
    top:140,
    height:20
   },
   text:{
    fontSize:20,
    color:"#32bbe3"
},
touch:{
    alignItems:"center",justifyContent:"center",
    width:70,
    height:70,
    
},
button:{width:70,
    height:70,
    shadowOffset:{width:1,height:1},
    shadowColor:'gray',
    shadowOpacity:1,
    ...Platform.select({
    android: {
        elevation: 5,
    },
    }), 
    justifyContent:"center",
    borderRadius:140,
    marginHorizontal:10,
    alignItems:"center",
    backgroundColor:"white",
},
button_section:{
    width:"100%",
    position:"absolute",
    bottom:20,
    flexDirection:"row",
    justifyContent:"space-between"
},
sıra_view:{
    position:"absolute",
    top:170,
    height:20
}
})