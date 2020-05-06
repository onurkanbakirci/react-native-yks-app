import React from "react";
import {Text,View,StyleSheet, Dimensions,KeyboardAvoidingView,SafeAreaView} from "react-native"

//components
import Header from "../components/header"
import Lessons from "../components/lessons"
import Direction_btn from "../components/direction_btn"
import {CheckBox } from 'react-native-elements'
//constants
import {tyt_constants} from './departmans/constants'
//redux
import {connect} from 'react-redux'
import {set_tyt_puan} from '../store/actions/actions'

const {width,height} = Dimensions.get("window")

class TytScreen extends React.Component{
    constructor(props){
        super(props)
        this.state={
            mat_dogru:0,
            sos_dogru:0,
            tur_dogru:0,
            fen_dogru:0,

            mat_yanlis:0,
            sos_yanlis:0,
            tur_yanlis:0,
            fen_yanlis:0,

            mat_net:0,
            sos_net:0,
            tur_net:0,
            fen_net:0,

            checked:true
        }
    }
    handle_right(){
        const {mat_net,sos_net,tur_net,fen_net}=this.state
        const ham_puan_tur=(50+(10*((tur_net-tyt_constants[0])/tyt_constants[1])))*33/100
        const ham_puan_sos=(50+(10*((sos_net-tyt_constants[2])/tyt_constants[3])))*17/100
        const ham_puan_mat=(50+(10*((mat_net-tyt_constants[4])/tyt_constants[5])))*33/100
        const ham_puan_fen=(50+(10*((fen_net-tyt_constants[6])/tyt_constants[7])))*17/100
        const ham=ham_puan_fen+ham_puan_mat+ham_puan_sos+ham_puan_tur
        const tyt_puan=(((ham_puan_fen+ham_puan_mat+ham_puan_sos+ham_puan_tur)-tyt_constants[9])*tyt_constants[8])
        this.props.set_tyt(tyt_puan,ham)
        this.props.navigation.navigate("Choices")
    }
    handle_left(){
        this.props.navigation.navigate("Home")
    }
    async handler_true(val,type){
        const new_val=parseInt(val)
        if(!isNaN(new_val) || val == ""){
        switch(type){
            case 1:
                if(val==""){
                await this.setState({tur_dogru:0})
                }else{
                await this.setState({tur_dogru:new_val})}
                break;
            case 2:
                if(val=="") {
                    await this.setState({sos_dogru:0})}
                    else{ await this.setState({sos_dogru:new_val})}
                break;
            case 3:
                if(val==""){
                    await this.setState({mat_dogru:0})
                    }else{
                await this.setState({mat_dogru:new_val})}
                break;
            case 4:
                if(val==""){
                    await this.setState({fen_dogru:0})
                    }else{
                await this.setState({fen_dogru:new_val})}
                    break;
        }
    }
        this.handler_net(new_val,type)
    }
    async handler_false(val,type){
        const new_val=parseInt(val)
        if(!isNaN(new_val) || val=="" ){
         switch(type){
            case 5:
                if(val==""){
                    await this.setState({tur_yanlis:0})
                }
                else{await this.setState({tur_yanlis:new_val})}
                break;
            case 6:
                if(val==""){
                    await this.setState({sos_yanlis:0})}
                else{ await this.setState({sos_yanlis:new_val})}
                break;
            case 7:
                if(val==""){
                    await this.setState({mat_yanlis:0})}else{
                await this.setState({mat_yanlis:new_val})}
                break;
            case 8:
                if(val==""){
                    await this.setState({fen_yanlis:0})}else{
                await this.setState({fen_yanlis:new_val})}
                    break;
        }  
    }
        this.handler_net(new_val,type)
}
    async handler_net(val,type){
        const new_val=parseInt(val)
        if(!isNaN(new_val) || val==""){
            switch(type){
                case 1 :
                case 5 :
                    await this.setState({tur_net:this.state.tur_dogru-this.state.tur_yanlis/4})
                    break;
                case 2:
                case 6:
                    await this.setState({sos_net:this.state.sos_dogru-this.state.sos_yanlis/4})
                    break;
                case 3:
                case 7:
                    await this.setState({mat_net:this.state.mat_dogru-this.state.mat_yanlis/4})
                    break;
                case 4:
                case 8:
                    await this.setState({fen_net:this.state.fen_dogru-this.state.fen_yanlis/4})
                        break;}
    }}
    checkbox_press(){
        this.setState({checked:this.state.checked ? false : true})
    }
    render() {
        let {main,buttons_section} =style
        let {navigation} = this.props
        let {checked} = this.state
        return (
            <SafeAreaView style={main}>
            <Header go_home={()=>navigation.navigate("Home")} go_saved={()=>navigation.push("saved")}/>
                <View>
                    <CheckBox containerStyle={{backgroundColor:"#32bbe3",borderRadius:10,marginTop:20}} textStyle={{color:"white"}} title='Geçen sene yerleştim' checked={checked} checkedColor="white" onPress={()=>this.checkbox_press()}/>
                    <Lessons changing_true_text={(val)=>this.handler_true(val,1)} changing_false_text={(val)=>this.handler_false(val,5)} lesson_name={"TÜRKÇE"}/>
                    <Lessons changing_true_text={(val)=>this.handler_true(val,2)} changing_false_text={(val)=>this.handler_false(val,6)} lesson_name={"SOSYAL"}/>
                    <Lessons changing_true_text={(val)=>this.handler_true(val,3)} changing_false_text={(val)=>this.handler_false(val,7)} lesson_name="MATEMATİK" />
                    <Lessons changing_true_text={(val)=>this.handler_true(val,4)} changing_false_text={(val)=>this.handler_false(val,8)} lesson_name={"FEN"}/>
                </View>
                <View style={buttons_section}>
                    <Direction_btn icon_name={"arrow-left"} handler_screen={()=>this.handle_left()} />
                    <Direction_btn icon_name={"arrow-right"} handler_screen={()=>this.handle_right()} />
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
  buttons_section:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:80,
    width:width,
    position:"absolute",
    bottom:10
  }
})

const mapStateToProps = state => {
    const {tyt_screen} = state
    return {
        tyt_puan:tyt_screen.tyt_puan,
        tyt_katsayı:tyt_screen.tyt_katsayı
    }
  };
const  mapDispatchToProps = (dispatch) => ({
  set_tyt: (data_one,data_two) => dispatch(set_tyt_puan(data_one,data_two))
})

 
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TytScreen);
