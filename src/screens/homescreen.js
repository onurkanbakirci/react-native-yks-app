import React from "react";
import {Text,View,StyleSheet, Dimensions, StatusBar} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
//components
import Header from "../components/header"
import Timer from "../components/timer"
import Msbutton from "../components/ms_button"
//redux
import {connect} from "react-redux"
import {get_data} from "../store/actions/actions"
//db 
import BaseManager from "../functions/db"

const {width,height} = Dimensions.get("window")

class HomeScreen extends React.Component{

    manager = new BaseManager()
    constructor(props){
        super(props)
        this.state={
        uni_names:[],
        bolum_names:[],
    }
    }
     data(){
        this.manager.get_table_bolum_names().then((val) => {
            for(let i = 0 ; i<val.length; i ++){
                this.state.bolum_names.push(val[i])
            }  
        })
        this.manager.get_table_uni_names().then((val) => {
            for(let i = 0 ; i<val.length; i ++){
                this.state.uni_names.push(val[i])
            }  
        })
        this.props.get_data(this.state.uni_names,this.state.bolum_names)
    }
    componentDidMount(){
       this.data()
    }
    render() {
        let {time_and_menu,buttons}=style
        let {navigation} = this.props
        return (
            <SafeAreaView >
                <StatusBar barStyle="dark-content" backgroundColor="white"/>
                <View style={time_and_menu}>
                    <Header go_home={()=>navigation.toggleDrawer()} go_saved={()=>navigation.push("saved")} />
                    <Timer/>
                </View>   
                <View style={buttons}>
                    <Msbutton icn_name={"calculator"} title={"Puan Hesabı"} handle_click={()=>navigation.navigate("Tyt")} />
                    <Msbutton icn_name={"search"} title={"Filtrele"} handle_click={()=>navigation.navigate("Filter")}  />
                </View>  
                <View style={buttons}>
                    <Msbutton icn_name={"building"} title={"Üniversiteler"} handle_click={()=>navigation.navigate("Universities")} />
                    <Msbutton icn_name={"book"} title={"Bölümler"} handle_click={()=>navigation.navigate("Bolums")} />
                </View>  
            </SafeAreaView>   
        )
    }
}
const style=StyleSheet.create({
    time_and_menu:{
        justifyContent:"center",
        alignItems:"center",
        height:height/2,
        justifyContent:"space-around"
    },
    buttons:{
        height:height/4,
        position:"relative",
        flexDirection:"row",
        justifyContent:"center",
    }
})
const mapStateToProps = state => {
    const {home} = state
    return {
        uni_names: home.uni_name_data,
        bolum_names: home.bolum_name_data,
    }
  };
const  mapDispatchToProps = (dispatch) => ({
    get_data : (uni,bolum) => dispatch(get_data(uni,bolum)),
})

 
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomeScreen);


  