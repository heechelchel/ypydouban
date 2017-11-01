import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
class NavUI extends Component {
	componentDidMount() {
		
	}
	render() {
		return (
			<ul id="nav">
        		<li><NavLink activeclassname="active" exact to="/">首页</NavLink></li>
        		<li><NavLink activeclassname="active" to="/aset">套系</NavLink></li>
        		<li><NavLink activeclassname="active" to="/photographer">摄影师</NavLink></li>
        		<li><NavLink activeclassname="active" to="/movie">客片</NavLink></li>
        		<li><NavLink activeclassname="active" to="/active">活动</NavLink></li>
      		</ul>
		)
	}
}

const mapStateToProps = (state)=>{
	return {
		list: state.list
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		getData: function(){
		}
	}
}

const Nav = connect(mapStateToProps, mapDispatchToProps)(NavUI);

export default Nav;