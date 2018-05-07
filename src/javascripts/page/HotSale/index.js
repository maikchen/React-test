import './index.scss'
import React, {Component} from 'react'
import { ListView, Toast } from 'antd-mobile'
import axios from 'axios'

//从store中获取数据
//import {connect} from 'react-redux'
//import {bindActionCreators} from 'redux'
//import '../../../store/hotsale/actionCreator'
//import actionCreator from "../../../store/hotsale/actionCreator";
//引入子组件
import GoodItem from './GoodItem'
import BackTop from "./BackTop"
class Hotsale extends Component {
    constructor(props){
        super(props)
        //准备存放数据的对象
        const dataSource = new ListView.DataSource({
            //当数据变化后判断不允许出现重复的数据
            rowHasChanged:(row1, row2) => row1 !== row2,
        })
        this.state={
            page:1,
            num:20,
            dataSource,
            isLoading:false,
            hasMore:true,
            isBackShow: false
        }
        //临时存放的
        this.goods = []
        this.onEndReached = this.onEndReached.bind(this)
        this.backtop = this.backtop.bind(this)
        this.listenScroll = this.listenScroll.bind(this)
    }
    getGoods(){
        Toast.loading('loading...',2)
        let {page,num} = this.state
        axios.get('./mz/api/recommend/home',{
            params: { page, num }
        }).then(res =>{
          let total = res.data.data.total
            if(page*num >= total){
              this.setState({ hasMore:false })
            }
            this.goods = this.goods.concat(res.data.data.list)
            this.setState({
                //将数据放入到dataSource
                dataSource:this.state.dataSource.cloneWithRows(this.goods),
                isLoading: false
         })
        })
        console.log(this.state.dataSource)
    }
    listenScroll(e){
        //监听滚动距离控制显隐
        //console.log(e)
        //console.log(document.documentElement.scrollTop)
        if(document.documentElement.scrollTop>300){
            if(this.state.isBackShow) return false;
            this.setState({isBackShow:true})
        }else{
            if(!this.state.isBackShow) return false;
            this.setState({isBackShow:false})
        }
    }
    backtop(){
        //alert(1)
        this.lv.scrollTo(0,0)
    }
    componentWillMount(){
        // if(!this.props.hotsale.goods.length) {
        //     this.props.getGood()
        // }
        //获取初始的商品
        this.getGoods()
    }
    //当滚动到底部会加载更多的数据
    onEndReached(){
        console.log("滚动获取新数据")
        if(this.state.isLoading) return false;
        if(!this.state.hasMore){
            //console.log("我是有底线的")
            Toast.info("没有更多数据了", 2)
            return false
        }
        this.setState({ page: ++ this.state.page , isLoading: true})
        this.getGoods()
    }
    // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
    // componentWillReceiveProps(nextProps) {
    //   if (nextProps.dataSource !== this.props.dataSource) {
    //     this.setState({
    //       dataSource: this.state.dataSource.cloneWithRows(nextProps.dataSource),
    //     });
    //   }
    // }
    render(){
        //let {goods} = this.props.hotsale
        //console.log(goods)
        //这是一TIAOtiao的数据
        //let index = data.length-1
        let {isBackShow} = this.state
        const row = (rowData, sectionID, rowID)=>{
            //不断的从数据里取出数据
            //console.log(rowData, sectionID, rowID)
            return (
               <GoodItem info={rowData} key={rowData.id}/>
            )
        }
        return(
            <div className= "hotSale clear">
                <div className="titles">
                    -&nbsp;好货精选&nbsp;-
                </div>
                <div className='items'>
                    <ListView
                        ref={el => this.lv = el}
                        dataSource={this.state.dataSource}
                        //渲染的头部和底部
                        // renderHeader={() => <span>header</span>}
                        // renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                        //     {this.state.isLoading ? 'Loading...' : 'Loaded'}
                        // </div>)}
                        renderRow={row}
                        // renderSeparator={separator}
                        className="am-list"
                        pageSize={4}
                        useBodyScroll
                        onScroll={this.listenScroll}
                        //距离底部还有多少时开始获取数据
                        scrollRenderAheadDistance={500}
                        onEndReached={this.onEndReached}
                        onEndReachedThreshold={10}
                    />

                </div>
                {
                    !isBackShow || <BackTop onClick={this.backtop}/>
                }

            </div>
        )
    }
    // scrollHandler(e){
    //     console.log(e)
    // }
    // //无限加载
    // componentDidMount(){
    //     window.addEventListener('scroll',this.scrollHandler)
    // }
    // 
    // //无限加载
    // componentWillUnmount(){
    //     window.removeEventListener('scroll',this.scrollHandler)
    // }
}

export default  Hotsale
// //组件从store中获取状态
// export default connect  (state => state, dispatch =>{
//     return bindActionCreators(actionCreator, dispatch)
// })(Hotsale)

//将数组转换成子符串
function trunArraytoObject(arr){
    let data = {}
    arr.forEach((item,i)=>{
        data[item.id] = item
    })

    return data
}