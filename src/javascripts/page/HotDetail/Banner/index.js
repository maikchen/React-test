import React ,{Component} from 'react'

import Swiper from 'swiper'

const SwiperSlider = props =>{
    let {src} = props
    return(
        <div className = 'swiper-slide'>
            <div className='img-box loading-img'>
                <img width= "100%" src = { src } alt=""/>
            </div>
        </div>
    )
}

class Banner extends Component {

    render(){
        let {images} = this.props
        return(
            <div className='swiper-container detail-banner'>
                <div className='swiper-wrapper'>
                    {
                        images.map((item,i) =>{
                            return <SwiperSlider key={i} src = {item}/>
                        })
                    }
                </div>
                <div className="swiper-pagination"></div>

            </div>
        )
    }
    componentDidMount(){
        new Swiper('.swiper-container',{
            autoplay:{
                delay: 2000,
                stopOnLastSlide: false,
                disableOnInteraction: false
            },
            //分页器
            pagination: {
                el:'.swiper-pagination',
                clickable:true
            }
        })
    }
}

export default Banner