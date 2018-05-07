import _state from './state'
import {
    ADD_GOOD_IN_CAR,
    REDUCE_GOOD_IN_CAR
} from  './const'
const reducer = (state=_state, action)=>{

    let new_state = Object.assign({},state)
    switch (action.type){
        case ADD_GOOD_IN_CAR :
            new_state = addHandler(new_state, action.info, action.fromCars);
            break;
        case REDUCE_GOOD_IN_CAR :
            new_state = reduceHandler(new_state,action.id)
        default :
            break;
    }

    //reducer函数对商品进行处理,每次更改的时候对其同步
    localStorage.goods = JSON.stringify(new_state.goods)
    return new_state
}
//添加商品的处理器
//state:当前状态，info:商品的信息 fromCars:是否从购物车界面操作的
function addHandler(state,info, fromCars) {
    //
    let isHas = state.goods.some(item =>{
        //如果是从详情页加的，数量就加等于已选择的数据，如果是从购物车页加的话，每次只能加1
        if(item.id === info.id){
            item.num += !fromCars ? info.choice_num : 1
            return true
        }
        return false
    })
    //如果购物车里没有这个商品，就添加这个商品
    if (!isHas){
        state.goods.push({
            ...info,
            num: !fromCars ? info.choice_num : 1
        })
    }
    return state
}
//减少商品的数量

function reduceHandler(state,id){
    state.goods = state.goods.filter(item =>{
        if(item.id === id){
            //让数量减减
            item.num --;
            //如果数量已经减少到0，就返回fasle,去掉该商品
            if(item.num<=0){
                return false
            }
            return true
        }
        return true
    })

    return state
}

export default reducer