import React from "react"
import {StyleSheet,Text,View} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

//components
import Header from "../../components/header"
import Lessons from "../../components/lessons"
import Direction_btn from "../../components/direction_btn"

export default class Dil extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let {main,bottom_part} = style
        let {navigation} = this.props

        return(
            <SafeAreaView style={main}>
            <Header go_home={()=>navigation.navigate("Home")} go_saved={()=>navigation.push("saved")}/>
            <Lessons lesson_name="DİL" />
            <View style={bottom_part}>
                    <Direction_btn icon_name="arrow-left" handler_screen={()=>navigation.navigate("Choices")} />
                </View>
            </SafeAreaView>
        )
    }
}
const style=StyleSheet.create({
    main:{
        flex:1,
        alignItems:"center"
    },
    bottom_part:{
        position:"absolute",
        bottom:10,
        left:0
    }
})