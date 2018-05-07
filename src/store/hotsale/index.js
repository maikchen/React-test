import _state from './state'
import {
    GOODS_LIST
} from './const'
const reducer = (state =_state, action)=>{
    let new_state = Object.assign({},state)

    switch (action.type){
        case GOODS_LIST:
            new_state.goods = action.goods; break;
        default:
            break;
    }
    return new_state
}

export default reducer