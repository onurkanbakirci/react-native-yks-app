
const initial_state = {
    tyt_puan:0,
    tyt_katsayı:0
}

export default (state = initial_state, action) => {
    switch (action.type) {
        case "set_tyt_puan":            
            return Object.assign({},{tyt_puan:action.data_one,tyt_katsayı:action.data_two},{})
        default:
            return state;
    }
};