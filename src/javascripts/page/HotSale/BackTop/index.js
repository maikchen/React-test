import './index.scss'
import  React from 'react'

const BackTop = props => {
    let {onClick} = props
    return(
        <div onClick={onClick} className="backTop">
            <i className="fa fa-arrow-up"></i>
        </div>
    )
}
export default BackTop