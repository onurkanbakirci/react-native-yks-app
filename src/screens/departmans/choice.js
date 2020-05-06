import React from "react"
import {Text,View, SafeAreaView,StyleSheet,Dimensions} from "react-native";
//components
import Choice_btn from "../../components/choice_btn"
import Direction_btn from "../../components/direction_btn"
import Header from '../../components/header'
const {width,height} = Dimensions.get("window")

export default class Choice extends React.Component{
    constructor(props){
        super(props)
    }
    handle(){
        this.props.navigation.navigate("Tyt")
    }
    handle_say(){
        this.props.navigation.navigate("Say")
    }
    handle_soz(){
        this.props.navigation.navigate("Soz")
    }
    handle_ea(){
        this.props.navigation.navigate("Ea")
    }
    handle_dil(){
        this.props.navigation.navigate("Dil")
    }

    render(){
        let {main,bottom_part} = style
        let {navigation} = this.props
        return(
            <SafeAreaView style={main}>
                <Header go_home={()=>navigation.navigate("Home")} go_saved={()=>navigation.push("saved")}/>
                <View>
                    <Choice_btn depart_text={"SAY"} handler_screen={()=>this.handle_say()} />
                    <Choice_btn depart_text={"SÖZ"} handler_screen={()=>this.handle_soz()} />
                    <Choice_btn depart_text={"EA"}  handler_screen={()=>this.handle_ea()} />
                    <Choice_btn depart_text={"DİL"} handler_screen={()=>this.handle_dil()} />
                </View>
                <View style={bottom_part}>
                    <Direction_btn icon_name="arrow-left" handler_screen={()=>this.handle()} />
                </View>
            </SafeAreaView>
        )
    }
}
const style = StyleSheet.create({
    main:{
        flex:1,
        alignItems:"center"
    },
    bottom_part:{
        width:width,
        position:"absolute",
        bottom:10
    }
})