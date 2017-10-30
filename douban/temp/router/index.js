import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Waimai from '../components/Waimai';
import Discover from '../components/Discover';
import Orders from '../components/Orders';
import Mine from '../components/Mine';

const Router = () => (
  <Router>
    <div>
      <Route exact path="/" component={Waimai}/>
      <Route path="/discover" component={Discover}/>
      <Route path="/orders" component={Orders}/>
      <Route path="/mine" component={Mine}/>
      <hr/>
      <ul>
        <li><Link to="/">外卖</Link></li>
        <li><Link to="/discover">发现</Link></li>
        <li><Link to="/orders">订单</Link></li>
        <li><Link to="/mine">我的</Link></li>
      </ul>
    </div>
  </Router>
)
export default Router