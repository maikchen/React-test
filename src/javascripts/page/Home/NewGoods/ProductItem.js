import  React from 'react'
const ProductItem = (props) =>{
    let {toDetail} = props
    let {title, desc, image, price_range, tags, product_name} = props.info
    //页面点击进入商品详情页，通过此路径（但是无状态组件不可以用withRouter来处理）
    return (
        <div onClick = { toDetail.bind(this, product_name) } className="product-item" >
            <div className="left img-loading">
                <img width="100%" src={image} alt="" />
            </div>
            <div className='right product-info'>
                <p className="titles">{title}</p>
                <p className="desc">{desc}</p>
                <p className="price">${price_range}</p>
                <p className="tags">
                    {
                        tags.map((item,i) =>{
                            return <span style={{background:item.color}} key={i}>{item.text}</span>
                        })
                    }
                </p>
            </div>
        </div>
    )
}
export default ProductItem

