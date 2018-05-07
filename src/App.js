import React, { Component } from 'react';
import {
    Route,
    Switch,
    withRouter,
    Redirect
} from 'react-router-dom'

import {Home, HotSale, Activity, Mine, GoodDetail, NotFound, HotDetail, Cars, Login} from './javascripts/page'
import NavBar from './javascripts/common/NavBar/NavBar'

//创建一个路由表
const  routes = [

    {id:'1', path:'/', component: Home, exact: true},
    {id:'2', path:'/hotsale', component: HotSale, exact: true },
    {id:'3', path:'/activity', component: Activity, exact: true},
    {id:'4', path:'/mine', component: Mine, exact: true},
    {id:'5', path:'/notfound', component: NotFound, exact: true},
    {id:'6', path:'/hotdetail/:id', component: HotDetail, exact: true},
    {id:'7', path:'/good-detail/:product_name', component: GoodDetail, exact: true},
    {id:'8', path:'/cars', component: Cars, exact:true},
    {id:'9', path:'/login', component:Login, exact: true}
]

class App extends Component {
    //(App不是路由组件,所以需要将其包裹用withrouter,转换成路由组件)
    hasNavBar(){
        //根据this.props.match之类的来判断是否需要navbar
        //console.log(this.props.match)
        //console.log(this.props.location)可以获取当前路径的值
        let pathName = this.props.location.pathname
        let unneed = ['/good-detail','/notfound','/hotdetail','/login']
        //some() 方法用于检测数组中的元素是否满足指定条件（函数提供）。返回true和false
       // startsWith确定此字符串实例的开头是否与指定的字符串匹配。
        let flag = unneed.some(item =>{
            if(pathName.startsWith(item)){
                return true
            }
            return false
        })
        //如果 flag为true,就不要navbar
        return !flag
    }
  render() {
    return (
      <div className="App">
          <Switch>
          {
              routes.map((item)=>{
                  return <Route exact = {item.exact} path={item.path} component={item.component} key={item.id}/>
              })

          }

          <Redirect from = "**" to = "/notfound"/>
          </Switch>
          {
              !this.hasNavBar() || <NavBar/>
          }

      </div>
    );
  }
}

export default withRouter(App);
