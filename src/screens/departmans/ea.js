import React from "react"
import {StyleSheet,Text,View,SafeAreaView} from "react-native"

//components
import Header from "../../components/header"
import Lessons from "../../components/lessons"
import Direction_btn from "../../components/direction_btn"
//redux
import {connect} from 'react-redux'
import {ayt_ea_constants} from './constants'
class Ea extends React.Component{
    constructor(props){
        super(props)
        this.state={
            mat_true:0,
            edeb_true:0,
            tar_true:0,
            cog_true:0,

            mat_false:0,
            tar_false:0,
            cog_false:0,
            edeb_false:0,

            mat_net:0,
            tar_net:0,
            edeb_net:0,
            cog_net:0
        }
    }

    async handler_true(val,type){
        const new_val=parseInt(val)
        if(!isNaN(new_val) || val == ""){
        switch(type){
            case 1:
                if(val==""){
                await this.setState({mat_true:0})
                }else{
                await this.setState({mat_true:new_val})}
                break;
            case 2:
                if(val=="") {
                    await this.setState({edeb_true:0})}
                    else{ await this.setState({edeb_true:new_val})}
                break;
            case 3:
                if(val==""){
                    await this.setState({tar_true:0})
                    }else{
                await this.setState({tar_true:new_val})}
                break;
            case 4:
                if(val==""){
                    await this.setState({cog_true:0})
                    }else{
                await this.setState({cog_true:new_val})}
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
                    await this.setState({mat_false:0})
                }
                else{await this.setState({mat_false:new_val})}
                break;
            case 6:
                if(val==""){
                    await this.setState({edeb_false:0})}
                else{ await this.setState({edeb_false:new_val})}
                break;
            case 7:
                if(val==""){
                    await this.setState({tar_false:0})}else{
                await this.setState({tar_false:new_val})}
                break;
            case 8:
                if(val==""){
                    await this.setState({cog_false:0})}else{
                await this.setState({cog_false:new_val})}
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
                await this.setState({mat_net:this.state.mat_true-this.state.mat_false/4})
                break;
            case 2:
            case 6:
                await this.setState({edeb_net:this.state.edeb_true-this.state.edeb_false/4})
                break;
            case 3:
            case 7:
                await this.setState({tar_net:this.state.tar_true-this.state.tar_false/4})
                break;
            case 4:
            case 8:
                await this.setState({cog_net:this.state.cog_true-this.state.cog_false/4})
                    break;
    }
}
}
handle_left(){
    this.props.navigation.navigate("Choices")
}
handle_right(){
    const {mat_net,edeb_net,tar_net,cog_net}=this.state;
    const ayt_mat=(50+(10*((mat_net-ayt_ea_constants[0])/ayt_ea_constants[1])))*30/100
    const ayt_edeb=(50+(10*((edeb_net-ayt_ea_constants[2])/ayt_ea_constants[3])))*18/100
    const ayt_tar=(50+(10*((tar_net-ayt_ea_constants[4])/ayt_ea_constants[5])))*7/100
    const ayt_cog=(50+(10*((cog_net-ayt_ea_constants[6])/ayt_ea_constants[7])))*5/100
    const ayt_puan=(((ayt_mat+ayt_cog+ayt_edeb+ayt_tar+this.props.tyt_katsayı*0.4)-ayt_ea_constants[9])*ayt_ea_constants[8])+180

    console.log(ayt_puan)
}

    render(){
        let {main} = style
        let {navigation} = this.props

        return(
            <SafeAreaView style={main}>
            <Header go_home={()=>navigation.navigate("Home")} go_saved={()=>navigation.push("saved")}/>
            <Lessons lesson_name="MATEMATİK" changing_true_text={(val)=>this.handler_true(val,1)} changing_false_text={(val)=>this.handler_false(val,5)} />
            <Lessons lesson_name="EDEBİYAT" changing_true_text={(val)=>this.handler_true(val,2)} changing_false_text={(val)=>this.handler_false(val,6)}/>
            <Lessons lesson_name="TAR-1" changing_true_text={(val)=>this.handler_true(val,3)} changing_false_text={(val)=>this.handler_false(val,7)}/>
            <Lessons lesson_name="COG-1" changing_true_text={(val)=>this.handler_true(val,4)} changing_false_text={(val)=>this.handler_false(val,8)}/>
            <Direction_btn icon_name={"arrow-left"} style_parent={{position:"absolute",bottom:10,left:0}}  handler_screen={()=>this.handle_left()} />
            <Direction_btn icon_name={"calculator"} style_parent={{position:"absolute",bottom:10,right:0}}  handler_screen={()=>this.handle_right()} />
            </SafeAreaView>
        )
    }
}
const style=StyleSheet.create({
    main:{
        flex:1,
        alignItems:"center"
    },
    
})
const mapStateToProps = state => {
    const {tyt_screen} = state
    return {
        tyt_puan:tyt_screen.tyt_puan,
        tyt_katsayı:tyt_screen.tyt_katsayı
    }
  };
const  mapDispatchToProps = (dispatch) => ({
  
})
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Ea);


