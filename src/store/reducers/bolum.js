const initial_state = {
    bolum_name:[],
    wanted_bolum:""
}

export default (state = initial_state, action) => {
    switch (action.type) {
        case "get_bolum_name":            
            return Object.assign({},{bolum_names:action.payload},{})    
        case "wanted_bolum_name":            
            return Object.assign({},{wanted_bolum:action.payload},{})    
        default:
            return state;
    }
};