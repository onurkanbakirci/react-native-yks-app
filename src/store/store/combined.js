import { combineReducers, createStore } from 'redux'

import home from '../reducers/home'
import universities from '../reducers/universities'
import tyt_screen from '../reducers/tyt_screen'
import bolum from '../reducers/bolum'
import filter from '../reducers/filter'




var combined = combineReducers({
    home,
    universities,
    tyt_screen,
    bolum,
    filter

})

export default store = createStore(combined)