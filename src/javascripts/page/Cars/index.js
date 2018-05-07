import React, {Component} from 'react'
import {connect} from 'react-redux'

import actionCreator from '../../../store/cars/actionCreator'
import {bindActionCreators} from 'redux'

class Cars extends Component{
    render(){
        let {goods} = this.props.cars

        return(
            <div>
               <ul>
                   {
                       goods.map((item,i)=>{
                           return(
                               <li key={i}>
                                   {item.masterName}-{(item.price/100).toFixed(2)}-{item.num}
                                   <button onClick={this.props.reduceGoodInCar.bind(this,item.id, item)}>-</button>
                                   <button onClick={this.props.addGoodInCar.bind(this, item, true)}>+ </button>
                               </li>
                           )
                       })
                   }
               </ul>
            </div>
        )
    }
}
export default connect(state =>state,dispatch =>{
    return bindActionCreators(actionCreator, dispatch)
}) (Cars)