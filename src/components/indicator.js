import React from 'react';
import {StyleSheet,View,Text,ActivityIndicator, Dimensions} from 'react-native'
const {width,height} =Dimensions.get("window")
export default class Indicator extends React.Component{
    render(){
        let {main,txt} = style
        return(
            <View style={main}>
                <ActivityIndicator color="#32bbe3" size="large" />
                <Text style={txt}>Veriler Yükleniyor</Text>
              </View>
        )

    }
}
const style=StyleSheet.create({
    main:{height:3*height/4,width:width,justifyContent:"center",alignItems:"center"},
    txt:{fontSize:20,marginTop:20,color:"#32bbe3"}
})