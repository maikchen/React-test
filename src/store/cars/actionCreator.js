import {
    ADD_GOOD_IN_CAR,
    REDUCE_GOOD_IN_CAR
} from './const'

export default {
    addGoodInCar(info, fromCars){
        console.log(info)
        return dispatch =>{
            //掉用户后端接口
            setTimeout(()=>{

                dispatch({
                   type: ADD_GOOD_IN_CAR,
                   info,
                   fromCars
                })
            },500)
        }
    },
    reduceGoodInCar(id){
        return dispatch => {
            setTimeout(() =>{
                dispatch({
                    type: REDUCE_GOOD_IN_CAR,
                    id
                })
            })
        }
    }
}

