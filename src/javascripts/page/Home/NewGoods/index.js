import './index.scss'

import React,{Component} from 'react'
import axios from 'axios'
import ProductItem from './ProductItem'
//withRouter不可以处理无状态组件，用withRouter将NewGood包裹来处理

import {
    withRouter
} from 'react-router-dom'
class NewGood extends Component{
    constructor(props){
        super(props)
        this.state = {
            products:[]
        }
        this.toDetail = this.toDetail.bind(this)
    }
    getProducts(){
        axios.get('/json/product.json').then(res=>{
            this.setState({products: res.data})
        })
    }
    componentWillMount(){
        this.getProducts()
    }
    toDetail(product_name){
        this.props.history.push({ pathname:`/good-detail/${ product_name }`})
    }
    render(){
        console.log(this)
        let {products} = this.state
        return (
            <div className='new-good' >
                <div className="product-list-header">新品首发</div>
                {
                    products.map(item =>{
                        return <ProductItem toDetail = { this.toDetail } info = {item} key = {item.id}/>
                    })
                }
            </div>

        )
    }
}
export default withRouter(NewGood)