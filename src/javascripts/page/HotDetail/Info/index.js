import './index.scss'
import React from 'react'

const Info = ({name, subname, price}) =>{
    return(
        <div className='info'>
            <div className='name'>{name}</div>
            <div className='subname'>{subname}</div>
            <div className= 'price'>￥{(price/100).toFixed(2)}</div>
        </div>
    )
}
export default Info