import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
class LoginUI extends Component {
	componentDidMount() {
		
	}
	render() {
		return (
			<div id="login">
        		登录
      		</div>
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

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginUI);

export default Login;