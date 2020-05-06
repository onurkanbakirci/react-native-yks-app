
const initial_state = {
    uni_name_data:[],
    bolum_name_data:[],
}

export default (state = initial_state, action) => {
    switch (action.type) {
        case "get_data":            
            return Object.assign({},{uni_name_data:action.uni,bolum_name_data:action.bolum},{})
        default:
            return state;
    }
};