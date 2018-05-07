import axios from 'axios'
import {
    GOODS_LIST
} from './const'

export default {
    //异步请求获取状态(异步操作返回一个函数的形式来进行数据的获取的)

    getGood(){
       return (dispatch)=>{
           axios.get('/mz/api/recommend/home',{
               params:{
                   page:1,
                   num:20,

               }
           }).then(res =>{
              let goods = res.data.data.list;
              dispatch({
                  type:GOODS_LIST,
                  goods
              })
           })
       }
    }

}

