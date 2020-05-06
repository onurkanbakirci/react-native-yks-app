export const get_data = (data_uni,data_bolum) => (
    {
        type:"get_data",
        uni:data_uni,
        bolum:data_bolum
    }
)

export const set_tyt_puan  = (data_one,data_two) =>(
    {
        type:"set_tyt_puan",
        data_one:data_one,
        data_two:data_two
    }
)
export const send_filter_data  = (data_one,data_two,data_three,data_four) =>(
    {
        type:"send_filter_data",
        data_one:data_one,
        data_two:data_two,
        data_three:data_three,
        data_four:data_four
        
    }
)