import './index.scss'
import React, {Component} from 'react'
import  BackHeader from './BackHeader'
import Banner from './Banner'
import Info from './Info'
import Choice from './Choice'
import axios from 'axios'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actionCreators from '../../../store/cars/actionCreator'
class HotDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            good_info: null,
            choice_num: 1,
            choice_type: null,
            isChoiceShow:false
        }
        this.toggleChoice = this.toggleChoice.bind(this)
        this.changeChoiceNum = this.changeChoiceNum.bind(this)
    }
    getGoodInfo(){
        let {id} = this.props.match.params
        if(!id){
            this.props.history.push('./hotsale')
            return false
        }
        axios.get('/mz/api/item',{
            params:{ id }
        }).then(res =>{
            console.log(res)
            this.setState({
                good_info: res.data.data,
                choice_type:res.data.data.options[0].item[0]
            })

        })
    }
    changeChoiceNum(bool){

        this.setState({choice_num: this.state.choice_num += (bool? 1 :-1)})

    }
    toggleChoice(){
        //console.log(1)
        this.setState({isChoiceShow: !this.state.isChoiceShow})
    }
    renderContent(){
        if(!this.state.good_info) return ''
        let {masterName,slaveName,options,id} = this.state.good_info
        let {images, price} = this.state.good_info.skuList[0]
        let {choice_type, choice_num,isChoiceShow } = this.state
        return(
            <div>
                <Banner images={images}/>
                <Info name={masterName} subname={slaveName} price={price}/>

                <div className='guige' onClick = {this.toggleChoice}>
                    已选择:{choice_type}X{choice_num}
                    <i className='fa fa-angle-right'></i>
                </div>

                {
                    isChoiceShow ? (
                        <div>
                            <div onClick={this.toggleChoice} className='mask'></div>
                            <div className='addCar'>
                                <button onClick={this.props.addGoodInCar.bind(this,{
                                    id,masterName,choice_type,choice_num,price
                                },false)} className='add'>加入购物车</button>
                            </div>
                            <Choice changeChoiceNum={this.changeChoiceNum} choice_type={choice_type} choice_num={choice_num} images={images} options={options} toggleChoice={this.toggleChoice.bind(this)}/>
                        </div>
                    ): ''
                }

            </div>
        )
    }
    componentWillMount(){
         this.getGoodInfo()
    }
    render (){
        console.log(this.props.cars.goods)
        return(
            <div className='hotDetail'>
                <BackHeader/>
                {
                    this.renderContent()
                }
                {/*{*/}
                    {/*//此处数据渲染的时候不可以直接渲染数组，应当渲染字符串*/}
                    {/*JSON.stringify(this.props.cars.goods)*/}
                {/*}*/}
            </div>
        )
    }

}
export default connect(state => state, dispatch=>{
    return bindActionCreators(actionCreators,dispatch)
}) (HotDetail)
