import React from 'react'
import {SafeAreaView,StyleSheet } from 'react-native'
//import {DrawerContentScrollView,DrawerItemList,DrawerItem} from '@react-navigation/drawer'
//components
import Label from '../../components/label'


export class DrawerContent extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(){
        console.log(this.props)
    }
    render(){
        let { main } =style
        let {navigation} = this.props
    return (
        <SafeAreaView style={main}>
            <Label label_txt={"Ana Menü"} icn_name={"home"} pressed={()=>navigation.navigate("Home")}/>
            <Label label_txt={"Kayıtlı Üniversiteler"} icn_name={"building"} pressed={()=>navigation.navigate("saved")}/>
            <Label label_txt={"Kayıtlı Bölümler"} icn_name={"book"} pressed={()=>navigation.navigate("saved")} />
        </SafeAreaView>
  );
}
}
const style=StyleSheet.create({
    main:{
        alignItems:"center",
        flex:1
    }
})
