import  {combineReducers} from 'redux'
import  allen from './allen'
import home from './home'
import hotsale from './hotsale'
import cars from './cars'

const  reducer = combineReducers({allen, home,hotsale,cars})

export default reducer