import React from "react";
import {Text,View,StyleSheet, Dimensions,FlatList,ActivityIndicator, Keyboard} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
//components
import Header from "../components/header"
import Direction_btn from "../components/direction_btn"
import Search from "../components/search"
import Card from "../components/card"
//searching
import SearchMethod from "../functions/search"
//redux
import {connect} from "react-redux"

const {width,height} = Dimensions.get("window")
class Bolums extends React.Component{
    
    search_manager = new SearchMethod()
    
    constructor(props){
        super(props)
        this.state={
            search_text:"",
            data:this.props.bolum_names,
            data_two:this.props.bolum_names,
            indicator:true,
        }
    }
    pass_data(item){
        this.props.set_bolum_name(item)
        this.props.navigation.navigate("bolum_datails",{item})
    }
    Items(item){
        return(
        <Card name={item} handler_screen={()=>this.pass_data(item)} />
        )
    }
    search_engine(val){
      this.search_manager.searching(val,this.state.data).then((dat) => this.setState({data_two:dat}))
    }
      
    
    render() {
        let {data_two} = this.state;         
        let {main,flat_list,child} =style
        let {navigation} = this.props

        return (
            <SafeAreaView style={main}>
                <View style={child}>
                  <Header go_home={()=>navigation.navigate("Home")} go_saved={()=>navigation.push("saved")}/>
                  <Search search_data={(val)=>this.search_engine(val)} place_text={"Bölümün isimini girin"}/>
                </View>
                <FlatList
                   keyExtractor={(item,index) => item }
                   data={data_two}
                   renderItem={({item}) => this.Items(item)}
                   style={flat_list}
                />
                <Direction_btn icon_name={"arrow-left"} handler_screen={()=>{navigation.navigate("Home"),Keyboard.dismiss()}} style_parent={{position:"absolute",bottom:10,right:10}} />
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
    const {home} = state
    return {
        bolum_names:home.bolum_name_data
    }
  };
  
  const mapDispatchToProps = (dispatch) => { 
    return{
      set_bolum_name : (data) => dispatch({ type:"wanted_bolum_name",payload:data })

    }
  };
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Bolums);
