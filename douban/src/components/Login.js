import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
class LoginUI extends Component {
	componentDidMount() {
		
	}
	render() {
		return (
			<div id="login">
        		<div className="head">
        			<Link to="/">取消</Link>
        			登录豆瓣
        		</div>
        		<div className="mobile">
        			<input type="text" name="username" placeholder="邮箱/手机号/用户名" />
        			<input type="password" name="pw" placeholder="密码" />
        			<button>登录</button>
        		</div>
        		<div className="mobile_nav">
        			<Link to="/register">注册豆瓣账号</Link>
        		    <Link to="/">下载豆瓣APP</Link>
        		</div>

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