import React from 'react'
import {StyleSheet,View,Text, Dimensions,Picker} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Slider} from 'react-native-elements'
//components
import Header from '../components/header'
import Direction_btn from '../components/direction_btn';
//redux
import {connect} from "react-redux"
import {send_filter_data} from "../store/actions/actions"
//database
import BaseManager from '../functions/db'
const {width,height} = Dimensions.get("window")
class Filter extends React.Component{
    manager=new BaseManager()
    constructor(props) {
        super(props)
    
        this.state = {
             slider_value:0,
             data_two:[],
             picker_departman_val:"SAY",
             picker_city_val:"",
             slider_value_two:0
        }
    }
    componentDidMount(){
        console.log(this.props)
        this.manager.get_from_table_city_names().then((val)=>{this.setState({data_two:val})})
    }

   filter(){
       this.props.send_filter_data(this.state.slider_value,this.state.picker_city_val,this.state.picker_departman_val,this.state.slider_value_two)
       this.props.navigation.push("filter_datails")
   }
    render(){
        let departmans =[["SAYISAL","SAY"],["SÖZEL","SÖZ"],["EŞİT AĞIRLIK","EA"],["DİL","DİL"]]
        let {main,slider,slider_txt,picker} =style
        let {navigation} = this.props
        let {slider_value,data_two,picker_departman_val,picker_city_val,slider_value_two}=this.state
        return(
            <SafeAreaView style={main}>
               <Header go_home={()=>navigation.navigate("Home")} go_saved={()=>navigation.push("saved")}/>
               <Picker mode="dialog" style={picker} onValueChange={(val)=>this.setState({picker_departman_val:val})} selectedValue={picker_departman_val} >
                    {departmans.map((i,index)=> <Picker.Item label={i[0]} value={i[1]} key={index} />)}
               </Picker>
               <Picker mode="dialog" style={picker} onValueChange={(val)=>this.setState({picker_city_val:val})} selectedValue={picker_city_val} >
                    {data_two.map((i,index)=> <Picker.Item label={i} value={i} key={index} />)}
               </Picker>
               <Slider animationType="spring" thumbStyle={{height:30,width:30,borderRadius:60}} thumbTintColor="#32bbe3" style={slider} maximumValue={400000} onValueChange={(val)=>this.setState({slider_value:val})} step={500} minimumValue={0} />
               <Text style={slider_txt}>{slider_value} - {slider_value_two}</Text>
               <Slider animationType="spring" thumbStyle={{height:30,width:30,borderRadius:60}} thumbTintColor="#32bbe3" style={slider} maximumValue={400000} onValueChange={(val)=>this.setState({slider_value_two:val})} step={500} minimumValue={0} />
               <Direction_btn icon_name={"arrow-left"} handler_screen={()=>{navigation.navigate("Home")}} style_parent={{position:"absolute",bottom:10,left:10}} />
               <Direction_btn icon_name={"filter"} handler_screen={()=>this.filter()} style_parent={{position:"absolute",bottom:10,right:10}} />
            </SafeAreaView>
        )
    }
}
const style=StyleSheet.create({
    main:{
        flex:1,
        alignItems:"center",
        
    },
    slider:{
        width:width-20,
    },
    slider_txt:{fontSize:40,color:"#32bbe3",marginVertical:30},
    picker:{height:50,width:width,color:"#32bbe3",marginVertical:20},
})

const mapStateToProps = state => {
    const {filter} = state
    return {
        slider_value:filter.slider_value,
        city_value:filter.city_value,
        departman_value:filter.departman_value,
        slider_value_two:filter.slider_value_two

    }
  };
const  mapDispatchToProps = (dispatch) => ({
    send_filter_data: (data_one,data_two,data_three,data_four) => dispatch(send_filter_data(data_one,data_two,data_three,data_four))
})

 
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Filter);