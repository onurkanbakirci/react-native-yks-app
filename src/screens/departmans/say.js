import React from "react"
import {StyleSheet,Text,View,SafeAreaView} from "react-native"

//components
import Header from "../../components/header"
import Lessons from "../../components/lessons"
import Direction_btn from "../../components/direction_btn"
//redux
import {connect} from 'react-redux'
//cosntants
import {ayt_say_constants} from './constants'

class Say extends React.Component{
    constructor(props){
        super(props)
        this.state={
            mat_dogru:0,
            fiz_dogru:0,
            kim_dogru:0,
            biy_dogru:0,

            mat_yanlis:0,
            fiz_yanlis:0,
            kim_yanlis:0,
            biy_yanlis:0,

            mat_net:0,
            fiz_net:0,
            kim_net:0,
            biy_net:0,

            isPressed:true
        }  
    }
    
    async handler_true(val,type){
        const new_val=parseInt(val)
        if(!isNaN(new_val) || val == ""){
        switch(type){
            case 1:
                if(val==""){
                await this.setState({mat_dogru:0})
                }else{
                await this.setState({mat_dogru:new_val})}
                break;
            case 2:
                if(val=="") {
                    await this.setState({fiz_dogru:0})}
                    else{ await this.setState({fiz_dogru:new_val})}
                break;
            case 3:
                if(val==""){
                    await this.setState({kim_dogru:0})
                    }else{
                await this.setState({kim_dogru:new_val})}
                break;
            case 4:
                if(val==""){
                    await this.setState({biy_dogru:0})
                    }else{
                await this.setState({biy_dogru:new_val})}
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
                    await this.setState({mat_yanlis:0})
                }
                else{await this.setState({mat_yanlis:new_val})}
                break;
            case 6:
                if(val==""){
                    await this.setState({fiz_yanlis:0})}
                else{ await this.setState({fiz_yanlis:new_val})}
                break;
            case 7:
                if(val==""){
                    await this.setState({kim_yanlis:0})}else{
                await this.setState({kim_yanlis:new_val})}
                break;
            case 8:
                if(val==""){
                    await this.setState({biy_yanlis:0})}else{
                await this.setState({biy_yanlis:new_val})}
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
                    await this.setState({mat_net:this.state.mat_dogru-this.state.mat_yanlis/4})
                    break;
                case 2:
                case 6:
                    await this.setState({fiz_net:this.state.fiz_dogru-this.state.fiz_yanlis/4})
                    break;
                case 3:
                case 7:
                    await this.setState({kim_net:this.state.kim_dogru-this.state.kim_yanlis/4})
                    break;
                case 4:
                case 8:
                    await this.setState({biy_net:this.state.biy_dogru-this.state.biy_yanlis/4})
                        break;
        }
    }
        }
       
        handle_right(){
            const {mat_net,fiz_net,kim_net,biy_net}=this.state;
            const ayt_mat=(50+(10*((mat_net-ayt_say_constants[0])/ayt_say_constants[1])))*30/100
            const ayt_fiz=(50+(10*((fiz_net-ayt_say_constants[2])/ayt_say_constants[3])))*10/100
            const ayt_kim=(50+(10*((kim_net-ayt_say_constants[4])/ayt_say_constants[5])))*10/100
            const ayt_biy=(50+(10*((biy_net-ayt_say_constants[6])/ayt_say_constants[7])))*10/100
            const ayt_puan=(((ayt_mat+ayt_fiz+ayt_kim+ayt_biy+this.props.tyt_katsayı*0.4)-ayt_say_constants[9])*ayt_say_constants[8])+180
           
            console.log(ayt_puan)
        }
    render(){
        let {main,buttons} = style
        let {navigation} = this.props

        return(
        
        <SafeAreaView style={main}>
            <Header go_home={()=>navigation.navigate("Home")} go_saved={()=>navigation.push("saved")}/>
            <Lessons changing_true_text={(val)=>this.handler_true(val,1)} changing_false_text={(val)=>this.handler_false(val,5)} lesson_name="MATEMATİK" />
            <Lessons changing_true_text={(val)=>this.handler_true(val,2)} changing_false_text={(val)=>this.handler_false(val,6)} lesson_name="FİZİK" />
            <Lessons changing_true_text={(val)=>this.handler_true(val,3)} changing_false_text={(val)=>this.handler_false(val,7)} lesson_name="KİMYA" />
            <Lessons changing_true_text={(val)=>this.handler_true(val,4)} changing_false_text={(val)=>this.handler_false(val,8)} lesson_name="BİYOLOJİ" />
            <Direction_btn icon_name={"arrow-left"} style_parent={{position:"absolute",bottom:10,left:0}}  handler_screen={()=>navigation.navigate("Choices")} />
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
  )(Say);



