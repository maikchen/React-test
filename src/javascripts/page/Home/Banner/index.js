
import './index.scss'

import Swiper from  'swiper'
import React,{Component} from 'react'
//从store获取数据
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import '../../../../store/home/actionCreate'
import actionCreate from "../../../../store/home/actionCreate"

//将banner单独做一个无状态组件
const SwiperBanner = props =>{
    let {image} = props.info
    return (
        <div className='swiper-slide img-loading'>
            <img width='100%' src={image} alt=""/>
        </div>
    )
}


class  Banner extends  Component {
    //因为市场上使用redux的方法，主要分为两派
    //1. 只需要把共享的状态放入到redux重管理
    //2.因为和react组件是轻量级的视图层组件，所以不应该去承载数据交互，所以将所有的数据交互都交由redux来管理
    //将请求到的数据挂载到状态上state
    // constructor(props){
    //     super(props)
    // //     this.state = {
    // //         banners:[]
    // //     }
    //  }
    //获取数据
   //  getBanners(){
   //      axios.get('/json/banner.json').then( res =>{
   //          //console.log(res)
   //          this.setState({ banners: res.data })
   //      })
   //  }
   // componentWillMount(){
   //      this.getBanners()
   // }
   //获取数据后render重新渲染(react只是视图上的，数据都是交由redux来处理的)
  componentWillMount(){
      //如果store中已经有了数据就不需要重新进行数据请求了
      //既不在调用action中的方法
      if(!this.props.home.banners.length){
          this.props.getBanners()
      }

  }
   render(){
        //如果banners的长度为空，返回false不渲染函数
        // if( !this.state.banners.length ){
        //     return false;
        // }
        //let { banners } = this.state
         //console.log(banners)
       let { banners } = this.props.home
       return(
            <div ref={ el => this.el = el } className = "swiper-container home-banner">
                <div className = "swiper-wrapper">
                    {
                        banners.map((item)=>{
                           return <SwiperBanner key={item.id} info={item}/>
                        })
                    }
                </div>
                <div className="swiper-pagination"></div>
            </div>
        )
    }
    componentDidMount() {
        if(this.props.home.banners.length) {
            new Swiper(this.el, {
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                },
            })
        }
    }
    componentDidUpdate() {
        new Swiper(this.el, {
            autoplay:{
                delay:1000,
                stopOnLastSlide:false,
                disableOnInteraction: false
            },
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
                clickable:true
            },
        })
    }
}
// 此组建可获取store中的状态
export default connect (state => state, dispatch =>{
    return bindActionCreators(actionCreate, dispatch)
}) (Banner)