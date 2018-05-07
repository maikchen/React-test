import './index'
import './index.scss'
import React, {Component} from 'react'
import Banner from './Banner'
import NewGood from "./NewGoods";
class Home extends Component {

    render(){
        return(
            <div>
                <Banner/>
                <div className = "block"></div>
                < NewGood></NewGood>
            </div>
        )
    }
}

export default Home