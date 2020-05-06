import SQLite from 'react-native-sqlite-storage'

const db=SQLite.openDatabase({name:"yks.db",readOnly: false, createFromLocation:"~yks.db"});
    
export default class BaseManager{
    get_table_uni_names (){
        return new Promise ((resolve,reject) => db.transaction(function(val){
            val.executeSql("SELECT * FROM universite_isimleri",[],(tx,results)=>{
                var uni_name_data=[]
                for (let i=0; i<results.rows.length; i++){
                    uni_name_data.push(results.rows.item(i).name)
                }
                resolve (uni_name_data)
            })
        })
        )}
    get_table_bolum_names (){
        return new Promise ((resolve,reject) => db.transaction(function(val){
            val.executeSql("SELECT * FROM bolum_isimleri",[],(tx,results)=>{
                var bolum_name_data=[]
                for (let i=0; i<results.rows.length; i++){
                    bolum_name_data.push(results.rows.item(i).name)                 
                }
                resolve (bolum_name_data)
                })
            })
            )}
    get_table_uni_details (uni_name){
        return new Promise ((resolve,reject) => db.transaction(function(val){
            val.executeSql("SELECT * FROM son_table_6 WHERE name=?",[uni_name],(tx,results)=>{
                var uni_name_data=[]
                for (let i=0; i<results.rows.length; i++){
                    var data=[]
                    data.push(results.rows.item(i).bolum)
                    data.push(results.rows.item(i).name)
                    data.push(results.rows.item(i).genel_kont)
                    data.push(results.rows.item(i).min_puan)
                    data.push(results.rows.item(i).puan_turu)
                    data.push(results.rows.item(i).city)
                    data.push(results.rows.item(i).ek_aciklama_ids)
                    uni_name_data.push(data)
                }
                resolve (uni_name_data)
            })
        })
        )}
    get_table_bolum_details (bolum_name){
        return new Promise ((resolve,reject) => db.transaction(function(val){
            val.executeSql("SELECT * FROM son_table_6 WHERE bolum=?",[bolum_name],(tx,results)=>{
                var bolum_name_data=[]
                for (let i=0; i<results.rows.length; i++){
                    var data=[]
                    data.push(results.rows.item(i).bolum)
                    data.push(results.rows.item(i).name)
                    data.push(results.rows.item(i).genel_kont)
                    data.push(results.rows.item(i).min_puan)
                    data.push(results.rows.item(i).puan_turu)
                    data.push(results.rows.item(i).city)
                    data.push(results.rows.item(i).ek_aciklama_ids)
                    bolum_name_data.push(data)
                }
                resolve (bolum_name_data)
            })
        })
        )}
        get_from_table_city_names (){
            return new Promise ((resolve,reject) => db.transaction(function(val){
                val.executeSql("SELECT * FROM universite_isimleri ",[],(tx,results)=>{
                    var data=[]
                    var city=[]
                    for (let i=0; i<results.rows.length; i++){
                        data.push(results.rows.item(i))
                    }
                    data.filter(function(item){
                        if(city.includes(item.city)){
                        }else{city.push(item.city)}
                    })
                    resolve (city)
                })
            })
            )}
        /*save_table_uni(){
        return  new Promise ( (resolve,reject) => db.transaction(function(val){
             val.executeSql("CREATE TABLE user_saves (" +
            "uni_name TEXT,"+
            "bolum_name TEXT,"+
            "min_puan INTEGER,"+
            "genel_kont INTEGER,"+
            "puan_turu TEXT,"+
            "city TEXT,"+
            "ek_aciklama_ids TEXT );",[],(tx,results)=>{
                resolve(true)
                })
            })
            )}*/
         set_to_saved_data(item){
        return new Promise ((resolve,reject) =>db.transaction(async function(val){
            await val.executeSql("INSERT INTO user_saves (uni_name,bolum_name,min_puan,genel_kont,puan_turu,city,ek_aciklama_ids) VALUES(?,?,?,?,?,?,?)"
            ,[item[1],item[0],item[3],item[2],item[4],item[5],item[6]],(tx,results)=>{
                resolve(true)
                })
            })
            )}
        print_from_saved_data(){
        return new Promise ((resolve,reject) => db.transaction(function(val){
            val.executeSql("SELECT * FROM user_saves",[],(tx,results)=>{
                var bolum_name_data=[]
                for (let i=0; i<results.rows.length; i++){
                    var data=[]
                    data.push(results.rows.item(i).bolum_name)
                    data.push(results.rows.item(i).uni_name)
                    data.push(results.rows.item(i).genel_kont)
                    data.push(results.rows.item(i).min_puan)
                    data.push(results.rows.item(i).puan_turu)
                    data.push(results.rows.item(i).city)
                    data.push(results.rows.item(i).ek_aciklama_ids)
                    bolum_name_data.push(data)}
                resolve(bolum_name_data)
                })
            })
            )}
            delete_datas(uni,bol){
                return new Promise ((resolve,reject) => db.transaction(function(val){
                val.executeSql("DELETE FROM user_saves WHERE uni_name=? AND bolum_name=?",[uni,bol],(tx,results)=>{
                resolve(true)})}))}    
            filter(city,depart){
                return new Promise ((resolve,reject) => db.transaction(function(val){
                    val.executeSql("SELECT * FROM son_table_6 WHERE city=? " ,[city],(tx,results)=>{
                        var real_data=[];
                        var last_real_data=[];
                        for (let i = 0 ; i<results.rows.length;i++){
                            var data=[];
                            data.push(results.rows.item(i).bolum)
                            data.push(results.rows.item(i).name)
                            data.push(results.rows.item(i).genel_kont)
                            data.push(results.rows.item(i).min_puan)
                            data.push(results.rows.item(i).puan_turu)
                            data.push(results.rows.item(i).city)
                            data.push(results.rows.item(i).ek_aciklama_ids)
                            real_data.push(data)
                        }
                        real_data.filter(function(val){
                            if(val[4]==depart){
                                last_real_data.push(val)
                            }
                            resolve(last_real_data)
                        })  
                        })
                    })
                    )
            }  
            second_filter(dat){
                const coming_data_puan=[]
                for (let i=0;i<dat.length;i++){
                    coming_data_puan.push(dat[i][3])
                }
                return new Promise ((resolve,reject) => db.transaction(function(val){
                val.executeSql("SELECT * FROM yerlestirme_puanlari",[],(tx,results)=>{
                    const last_data=[]
                    for (var i=0;i<results.rows.length;i++){
                        coming_data_puan.filter(function(item){
                            if(results.rows.item(i).puan==Math.floor(item)){
                                const diff=item-results.rows.item(i).puan
                                const edit_diff=(diff).toFixed(3)*1000
                                const yer=edit_diff+results.rows.item(i).say
                                last_data.push(yer)
                                }
                        })
                    }
                    resolve(last_data)
                    })
                })
                )}
            combine(city){return new Promise ((resolve,reject) => db.transaction(function(val){
                val.executeSql("SELECT * FROM son_table_6",[],(tx,results)=>{
                    for(let i = 0;i<results.rows.length;i++){
                        if(results.rows.item(i).city ==s ){}
                    }
                    resolve(results.rows.length)
                    })
                })
                )}
}
//`VALUES('${data[1]}')`