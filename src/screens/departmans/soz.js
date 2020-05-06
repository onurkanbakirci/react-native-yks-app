import React from "react"
import {StyleSheet,Text,View,SafeAreaView,ScrollView, Dimensions} from "react-native"

//components
import Header from "../../components/header"
import Lessons from "../../components/lessons"
import Direction_btn from "../../components/direction_btn"
//constants
import {ayt_soz_constants} from './constants'
const {width,height} = Dimensions.get("window")
//redux
import {connect} from 'react-redux'

class Soz extends React.Component{
    constructor(props){
        super(props)
        this.state={
            edeb_true:0,
            tar_one_true:0,
            tar_two_true:0,
            cog_one_true:0,
            cog_two_true:0,
            din_true:0,
            fel_true:0,

            edeb_false:0,
            tar_one_false:0,
            tar_two_false:0,
            cog_one_false:0,
            cog_two_false:0,
            din_false:0,
            fel_false:0,

            edeb_net:0,
            tar_one_net:0,
            tar_two_net:0,
            cog_one_net:0,
            cog_two_net:0,
            din_net:0,
            fel_net:0,
        }
    }
    async handler_true(val,type){
        const new_val=parseInt(val)
        if(!isNaN(new_val) || val == ""){
        switch(type){
            case 1:
                if(val==""){
                await this.setState({edeb_true:0})
                }else{
                await this.setState({edeb_true:new_val})}
                break;
            case 2:
                if(val=="") {
                    await this.setState({tar_one_true:0})}
                    else{ await this.setState({tar_one_true:new_val})}
                break;
            case 3:
                if(val==""){
                    await this.setState({cog_one_true:0})
                    }else{
                await this.setState({cog_one_true:new_val})}
                break;
            case 4:
                if(val==""){
                    await this.setState({tar_two_true:0})
                    }else{
                await this.setState({tar_two_true:new_val})}
                    break;
            case 5:
                if(val==""){
                    await this.setState({cog_two_true:0})
                    }else{
                await this.setState({cog_two_true:new_val})}
                    break;
            case 6:
                if(val==""){
                    await this.setState({din_true:0})
                    }else{
                await this.setState({din_true:new_val})}
                    break;
            case 7:
                if(val==""){
                    await this.setState({fel_true:0})
                    }else{
                await this.setState({fel_true:new_val})}
                    break;
        }
    }
        this.handler_net(new_val,type)
    }
    async handler_false(val,type){
        const new_val=parseInt(val)
        if(!isNaN(new_val) || val=="" ){
         switch(type){
            case 8:
                if(val==""){
                    await this.setState({edeb_false:0})
                }
                else{await this.setState({edeb_false:new_val})}
                break;
            case 9:
                if(val==""){
                    await this.setState({tar_one_false:0})}
                else{ await this.setState({tar_one_false:new_val})}
                break;
            case 10:
                if(val==""){
                    await this.setState({cog_one_false:0})}else{
                await this.setState({cog_one_false:new_val})}
                break;
            case 11:
                if(val==""){
                    await this.setState({tar_two_false:0})}else{
                await this.setState({tar_two_false:new_val})}
                    break;
            case 12:
                if(val==""){
                    await this.setState({cog_two_false:0})}else{
                await this.setState({cog_two_false:new_val})}
                    break;
            case 13:
                if(val==""){
                    await this.setState({din_false:0})}else{
                await this.setState({din_false:new_val})}
                    break;
            case 14:
                if(val==""){
                    await this.setState({fel_false:0})}else{
                await this.setState({fel_false:new_val})}
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
            case 8 :
                await this.setState({edeb_net:this.state.edeb_true-this.state.edeb_false/4})
                break;
            case 2:
            case 9:
                await this.setState({tar_one_net:this.state.tar_one_true-this.state.tar_one_false/4})
                break;
            case 3:
            case 10:
                await this.setState({cog_one_net:this.state.cog_one_true-this.state.cog_one_false/4})
                break;
            case 4:
            case 11:
                await this.setState({tar_two_net:this.state.tar_two_true-this.state.tar_two_false/4})
                    break;
            case 5:
            case 12:
                    await this.setState({cog_two_net:this.state.cog_two_true-this.state.cog_two_false/4})
                        break;
            case 6:
            case 13:
                await this.setState({din_net:this.state.din_true-this.state.din_false/4})
                    break;
            case 7:
            case 14:
                await this.setState({fel_net:this.state.fel_true-this.state.fel_false/4})
                    break;
    }
}
    }
    handle_right(){
        const {edeb_net,tar_one_net,cog_one_net,tar_two_net,cog_two_net,din_net,fel_net}=this.state
        const ayt_edeb=(50+(10*((edeb_net-ayt_soz_constants[0])/ayt_soz_constants[1])))*18/100
        const ayt_tar_one=(50+(10*((tar_one_net-ayt_soz_constants[2])/ayt_soz_constants[3])))*7/100
        const ayt_cog_one=(50+(10*((cog_one_net-ayt_soz_constants[4])/ayt_soz_constants[5])))*5/100
        const ayt_tar_two=(50+(10*((tar_two_net-ayt_soz_constants[6])/ayt_soz_constants[7])))*8/100
        const ayt_cog_two=(50+(10*((cog_two_net-ayt_soz_constants[8])/ayt_soz_constants[9])))*8/100
        const ayt_din=(50+(10*((din_net-ayt_soz_constants[10])/ayt_soz_constants[11])))*5/100
        const ayt_fel=(50+(10*((fel_net-ayt_soz_constants[12])/ayt_soz_constants[13])))*9/100
        const final_score=(((ayt_edeb+ayt_tar_one+ayt_cog_one+ayt_tar_two+ayt_cog_two+ayt_din+ayt_fel+this.props.tyt_katsayı)-ayt_soz_constants[9])*ayt_soz_constants[8])+180
        console.log(final_score)
    }
    
    render(){
        let {main,buttons} = style
        let {navigation} = this.props

        return(
            <SafeAreaView style={main}>
                <Header go_home={()=>navigation.navigate("Home")} go_saved={()=>navigation.push("saved")}/>
                <ScrollView>
                <Lessons lesson_name="EDEBİYAT" changing_true_text={(val)=>this.handler_true(val,1)} changing_false_text={(val)=>this.handler_false(val,8)} />
                <Lessons lesson_name="TAR-1" changing_true_text={(val)=>this.handler_true(val,2)} changing_false_text={(val)=>this.handler_false(val,9)}/>
                <Lessons lesson_name="COG-1" changing_true_text={(val)=>this.handler_true(val,3)} changing_false_text={(val)=>this.handler_false(val,10)}/>
                <Lessons lesson_name="TAR-2" changing_true_text={(val)=>this.handler_true(val,4)} changing_false_text={(val)=>this.handler_false(val,11)} />
                <Lessons lesson_name="COG-2" changing_true_text={(val)=>this.handler_true(val,5)} changing_false_text={(val)=>this.handler_false(val,12)}/>
                <Lessons lesson_name="DİN" changing_true_text={(val)=>this.handler_true(val,6)} changing_false_text={(val)=>this.handler_false(val,13)} />
                <Lessons lesson_name="FELSEFE" changing_true_text={(val)=>this.handler_true(val,7)} changing_false_text={(val)=>this.handler_false(val,14)} />
                <View style={buttons}>
                    <Direction_btn icon_name={"arrow-left"}   handler_screen={()=>navigation.navigate("Choices")} />
                    <Direction_btn icon_name={"arrow-right"} handler_screen={()=>this.handle_right()} />
                </View>
            </ScrollView>
            </SafeAreaView>
        )
    }
}
const style=StyleSheet.create({
    main:{
        flex:1,
        alignItems:"center"
    },
    buttons:{
        marginTop:10,
        flexDirection:"row",
        justifyContent:"space-between"
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
  
})
 
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Soz);