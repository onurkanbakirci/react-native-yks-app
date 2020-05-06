const initial_state = {
    uni_names:[],
    wanted_uni:""
}

export default (state = initial_state, action) => {
    switch (action.type) {
        case "get_uni_name":            
            return Object.assign({},{uni_names:action.payload},{})    
        case "wanted_uni_name":            
            return Object.assign({},{wanted_uni:action.payload},{})    
        default:
            return state;
    }
};