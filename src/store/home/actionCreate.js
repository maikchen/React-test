import axios from 'axios'

import {
    CHANGE_BANNERS
} from "./const"

export default {
    //异步请求获取状态(异步操作返回一个函数的形式来进行数据的获取的)
    //获取数据后将数据发送给reducer(在一个常量模块)
    getBanners(){
       return (dispacth)  =>{ //获取轮播图的数据
           axios.get('/json/banner.json').then(res =>{
               let banners = res.data
               dispacth({
                   type: CHANGE_BANNERS,
                   banners
               })
           })
       }
    }
}