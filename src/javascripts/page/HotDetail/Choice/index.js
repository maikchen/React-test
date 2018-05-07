import './index.scss'
import React,{Component} from 'react'

const ChoiceItem = props =>{
    let {name, item } = props.info
    let { choice_type } = props
    return(
        <div className= 'choice-item'>
            <p>{name}</p>
            <p className="item-box">
                {
                    item.map((obj ,i)=>{
                        return <span className={ "item-span"+(choice_type === obj ? 'active': '')} key={i}>{obj}</span>
                    })
                }
            </p>

        </div>
    )
}

const Number = props =>{
    let { changeChoiceNum, choice_num} =props
    return(
        <div>
            <p>数量:</p>
            <button onClick={ changeChoiceNum.bind(this, false)}>-</button>
            <span>{choice_num}</span>
            <button onClick={ changeChoiceNum.bind(this, true)}>+</button>
        </div>
    )
}


class Choice extends Component {
    constructor(props){
        super(props)
    }
    render(){

        let {toggleChoice, images, options, choice_type, choice_num, changeChoiceNum} = this.props
        return(
            <div className= 'choice-box'>
                <div onClick={toggleChoice} className='fa fa-window-close'>
                </div>
                {
                    options.map(item =>{
                        return  <ChoiceItem choice_type={choice_type} info = {item}key = {item.id}/>
                    })
                }
                <Number choice_num={choice_num} changeChoiceNum = {changeChoiceNum }/>
            </div>
        )
    }
}
export default Choice