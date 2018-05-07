import 'swiper/dist/css/swiper.min.css'
import React from 'react';
import ReactDOM from 'react-dom';

import  {Provider} from  'react-redux'
import  store from './store'
//引入rem设置模块
import './module/rem'
//引入重置样式
import './stylesheets/main.scss'
//引入antd-moblie的样式库
import 'antd-mobile/dist/antd-mobile.css'
//配置路由
import {
    BrowserRouter as Router
} from 'react-router-dom'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//解决click 300ms的延迟
import FastClick from 'fastclick'
FastClick.attach(document.body)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
