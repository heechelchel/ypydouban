import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Main from '../components/Main';
import Aset from '../components/Aset';
import Photographer from '../components/Photographer';
import Movie from '../components/Movie';
import Active from '../components/Active';
import Detail from '../components/Detail';
import '../style/base.scss';
import '../style/index.scss';


const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Main}/>
      <Route path="/aset" component={Aset}/>
      <Route path="/movie" component={Movie}/>
      <Route path="/active" component={Active}/>
      <Route path="/detail" component={Detail}/>
      <Route path="/photographer" component={Photographer}/>
     <Route  path='/detail/:id' component={Detail}/>
      
      <ul id="nav">
        <li className="cusor"><Link to="/">首页</Link></li>
        <li><Link to="/aset">套系</Link></li>
        <li><Link to="/photographer">摄影师</Link></li>
        <li><Link to="/movie">客片</Link></li>
        <li><Link to="/active">活动</Link></li>
      </ul>
    </div>
  </Router>
)
export default App