export default class SearchMethod{
    searching(a,b){
        return new Promise ((resolve,reject)=> {
            const datas=[]
            b.filter(function(item) {
                //applying filter for the inserted text in search bar
                const itemData = item ? item.toUpperCase() : ''.toUpperCase();
                const textData = a.toUpperCase();
                  if (itemData.indexOf(textData) > -1){
                      datas.push(itemData)
                  }
                  resolve(datas);
                })
        })
    }
    searching_detail(a,b){
        return new Promise ((resolve,reject)=> {
            const bolum_names=[]
            const datas=[]
            for(let i =0;i<b.length;i++){
                bolum_names.push(b[i][0])
            }  
            b.filter(function(item) {

                //applying filter for the inserted text in search bar
                const itemData = item[0] ? item[0].toUpperCase() : ''.toUpperCase();
                const textData = a.toUpperCase();
                  if (itemData.indexOf(textData) > -1){
                    datas.push(item)
                  }
                  resolve(datas);
                })
        })
    }
    searching_detail_bolum(a,b){
        return new Promise ((resolve,reject)=> {
            const bolum_names=[]
            const datas=[]
            for(let i =0;i<b.length;i++){
                bolum_names.push(b[i][1])
            }  
            b.filter(function(item) {
                //applying filter for the inserted text in search bar
                const itemData = item[1] ? item[1].toUpperCase() : ''.toUpperCase();
                const textData = a.toUpperCase();
                  if (itemData.indexOf(textData) > -1){
                    datas.push(item)
                  }
                  resolve(datas);
                })
        })
    }
}