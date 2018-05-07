
import _state from  './state'

const reducer = (state = _state ,action)=>{
    let new_state = Object.assign({}, state)

    return new_state
}

export default reducer