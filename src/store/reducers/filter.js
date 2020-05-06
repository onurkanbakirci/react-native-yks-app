const initial_state = {
    slider_value:0,
    city_value:"",
    departmant_value:"",
    slider_value_two:0
}

export default (state = initial_state, action) => {
    switch (action.type) {
        case "send_filter_data":            
            return Object.assign({},{slider_value:action.data_one,city_value:action.data_two,departman_value:action.data_three,slider_value_two:action.data_four},{})    
        default:
            return state;
    }
};