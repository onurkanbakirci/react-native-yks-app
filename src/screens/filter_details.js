import React from 'react'
import {StyleSheet,View,Text, Dimensions,FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Slider} from 'react-native-elements'
//components
import Header from '../components/header'
import Direction_btn from '../components/direction_btn';
import Carddetails from '../components/card_detail';
import Indicator from '../components/indicator'
//redux
import {connect} from "react-redux"
//database
import BaseManager from '../functions/db'

const {width,height} = Dimensions.get("window")
class Filterdetails extends React.Component{
    manager=new BaseManager()
    constructor(props) {
        super(props)
    
        this.state = {
            data_two:[],
            indicator:true
        }
    }
    
    componentDidMount(){
        console.log(this.props)
        this.manager.filter(this.props.city_value,this.props.departman_value).then((val) =>this.manager.second_filter(val)).then((come_data)=>this.setState({data_two:come_data}))
        //this.manager.filter(this.props.city_value,this.props.departman_value).then((val) => this.setState({data_two:val}))
        setTimeout(()=>this.setState({indicator:false}),300)
    }
    Items(item){
        return(
        <Carddetails icn_name_one={"save"} siralama={item} />
        )}
    render(){
        let {main} =style
        let {navigation} = this.props
        let {data_two} =this.state
        return(
            <SafeAreaView style={main}>
            {(!this.state.indicator) ? 
            <SafeAreaView style={main}>
               <Header go_home={()=>navigation.navigate("Home")} go_saved={()=>navigation.push("saved")}/>
               <FlatList
                   data={data_two}
                   keyExtractor={(item,index) => item }
                   renderItem={({item})=>this.Items(item)}
                />
               <Direction_btn icon_name={"arrow-left"} handler_screen={()=>{navigation.navigate("Filter")}} style_parent={{position:"absolute",bottom:10,right:10}} />
               </SafeAreaView>
               :
                   <Indicator/>
               }
            </SafeAreaView>
        )
    }
}
const style=StyleSheet.create({
    main:{
        flex:1,
        alignItems:"center",
        
    },
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

})

 
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Filterdetails);