
import _state from './state'
import {
    CHANGE_BANNERS
} from './const'

const reducer = (state = _state,action)=>{
     let new_state = Object.assign({},state)
     switch (action.type){
         case CHANGE_BANNERS :
              new_state.banners = action.banners; break;
         default: break;
     }
     return new_state
}
export default reducer
