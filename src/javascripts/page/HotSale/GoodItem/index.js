import './index.scss'
import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'

class GoodItem extends Component{

    //跳转的方法
    toDetail(id){
        console.log('1')
        let {history} = this.props
        history.push ('/hotdetail/'+id)
    }
    render() {
        let {masterName, displaySalesCount, skuList,id} = this.props.info

        return (
            <div onClick={this.toDetail.bind(this, id)} className="good-item">
                <div className="img-loading img-box">
                    <div className="box-zz" style={{background: "#fff"}}>
                        <img width="100%" src={skuList[0].image}/>
                    </div>
                </div>
                <p className="name">
                    {masterName}
                </p>
                <p className="connect">
                    <span className="price">￥{skuList[0].price}</span>
                    <span className='inventory'>已售{displaySalesCount}</span>
                </p>

            </div>
        )
    }


}
export default withRouter (GoodItem)
