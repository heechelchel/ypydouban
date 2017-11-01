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
import Login from '../components/Login';
import Detail from '../components/Detail';
import '../style/base.scss';
import '../style/index.scss';
import '../style/detail.scss'


const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Main}/>
      <Route path="/aset" component={Aset}/>
      <Route path="/movie" component={Movie}/>
      <Route path="/active" component={Active}/>     
      <Route path="/photographer" component={Photographer}/>
      <Route path="/login" component={Login}/>
      <Route  path='/detail/:id' component={Detail}/>
      <Route exact path="/detail" component={Detail}/>
    </div>
  </Router>
)
export default App