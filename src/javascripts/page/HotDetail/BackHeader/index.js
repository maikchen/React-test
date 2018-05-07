import './index.scss'
import React from 'react'
import { Link } from 'react-router-dom'
const BackHeader = props => {
    return(
        <div className= 'backHeader'>
            <Link to="/hotsale">
                <div className='back'>
                    <i className= 'fa fa-arrow-circle-left'></i>
                </div>
            </Link>
        </div>
    )
}

export default  BackHeader