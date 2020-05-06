import React from "react";
import {Text,View,FlatList,StyleSheet, Dimensions,SafeAreaView} from "react-native";
//components
import Carddetails from "../../components/card_detail";
import Header from '../../components/header'
import Direction_btn from "../../components/direction_btn";

//db
import BaseManager from '../../functions/db'
import Indicator from "../../components/indicator";

const {width,height} = Dimensions.get("window")

export default class Saveduni extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
             data:[],
        }
    }
    manager=new BaseManager()

    componentDidMount(){
        this.manager.print_from_saved_data().then((val) =>{this.setState({data:val})})
    }
    async pass_data(uni,bol){
         this.manager.delete_datas(uni,bol)
         const index = this.state.data.indexOf(uni)
        if(index>-1){
            this.state.data.splice(index,1)
         }
         this.props.navigation.push("saved")
    }
    UseItem(item){
        return(
           <Carddetails icn_name_one={"trash"} uni_name={item[1]} puan={item[3]} ek_aciklama={item[6]} tur={item[4]} bolum_name={item[0]} save={()=>{this.pass_data(item[1],item[0])}}  />
           )}
    render(){
        const {main,flat_list,empty_txt,empt_parent} =style
        const {data} = this.state
        let {navigation} = this.props

        return(
            <SafeAreaView style={main}>
            { (this.state.data.length != 0) ? 
            <SafeAreaView style={main}>
                <Header go_home={()=>navigation.toggleDrawer()} go_saved={()=>navigation.push("saved")}/>
                <FlatList
                    keyExtractor={(item,index) => index}
                    data={data}
                    renderItem={({item}) => this.UseItem(item)}
                    style={flat_list}
                />
                <Direction_btn handler_screen={()=>{navigation.navigate("Home")}} style_parent={{position:"absolute",bottom:10,right:10}} icon_name={"arrow-left"} />
            </SafeAreaView>
            :
            <SafeAreaView style={main}>
            <Header go_home={()=>navigation.toggleDrawer()} go_saved={()=>navigation.push("saved")}/>
                <View style={empt_parent}>
                    <Text style={empty_txt}>Kayıtlı veri mevcut değil</Text>
                 </View>
                <Direction_btn handler_screen={()=>{navigation.navigate("Home")}} style_parent={{position:"absolute",bottom:10,right:10}} icon_name={"arrow-left"} />
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
    empty_txt:{
        textAlign:"center",
        color:"#32bbe3",
        fontSize:20
    },
    empt_parent:{
        flex:1,justifyContent:"center"
    },
    flat_list:{
        marginTop:10
      }
})