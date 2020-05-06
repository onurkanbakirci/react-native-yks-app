import React from "react";
import {Text,View,StyleSheet, Dimensions,FlatList,Keyboard} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
//components
import Header from "../components/header"
import Direction_btn from "../components/direction_btn"
import Carddetails from "../components//card_detail"
import Search from "../components/search";
import Indicator from '../components/indicator'
//redux
import {connect} from "react-redux"
//serach
import BaseManager from '../functions/db'
import SearchMethod from "../functions/search"

const {width,height} = Dimensions.get("window")
class Unidetails extends React.Component{
  
  search_manager = new SearchMethod()
  uni_manager=new BaseManager()


    constructor(props){
        super(props)
        this.state={
            search_text:"",
            data:[],
            data_two:[],
            indicator:true,
        }
    }
    
    componentDidMount(){
     this.uni_manager.get_table_uni_details(this.props.get_wanted_uni_name).then((val)=>this.setState({data:val,data_two:val}))
     setTimeout(()=>this.setState({indicator:false}),200)

    }
      
    Items(item){
      return(
      <Carddetails icn_name_one={"save"} uni_name={item[1]} puan={item[3]} ek_aciklama={item[6]} tur={item[4]} bolum_name={item[0]} save={()=>this.uni_manager.set_to_saved_data(item)} />
      )
  }
  search_engine(val){
    this.search_manager.searching_detail(val,this.state.data).then((dat) => this.setState({data_two:dat}))
  }
    
    render() {
        let {data_two} = this.state;         
        let {main,child} =style
        let {navigation} = this.props
        return (
          <SafeAreaView style={main}>
          { (!this.state.indicator) ? 
          <SafeAreaView>
            <View style={child}> 
              <Header go_home={()=>navigation.navigate("Home")} go_saved={()=>navigation.push("saved")}/>
              <Search place_text={"Aradığınız bölümün ismini girin"} search_data={(val)=>this.search_engine(val)}/>
            </View>
                <FlatList
                   keyExtractor={(item,index) => item }
                   data={data_two}
                   renderItem={({item}) =>this.Items(item)}
                />
                <Direction_btn icon_name={"arrow-left"} handler_screen={()=>{navigation.push("Universities"),Keyboard.dismiss()}} style_parent={{position:"absolute",bottom:10,right:10}} />
                </SafeAreaView>
              :
              <SafeAreaView style={main}>
              <View style={child}> 
              <Header go_home={()=>navigation.navigate("Home")} go_saved={()=>navigation.push("saved")}/>
              <Search place_text={"Aradığınız bölümün ismini girin"} search_data={(val)=>this.search_engine(val)}/>
              </View>
              <Indicator/>
              
              </SafeAreaView>
              } 
             </SafeAreaView>
        )
    }
}
const style=StyleSheet.create({
  main:{
      flex:1,
      alignItems:"center"
  },
  child:{height:height/5,backgroundColor:"#32bbe3",alignItems:"center",width:width}

})
const mapStateToProps = state => {
    const {universities} = state
    return {
        get_wanted_uni_name:universities.wanted_uni
    }
  };
  
  const mapDispatchToProps = (dispatch) => { 
    return{
    }
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Unidetails);


