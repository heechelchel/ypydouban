import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
class RegisterUI extends Component {
	componentDidMount() {
		
	}
	render() {
		return (
			<div id="register">
        		<div className="head">
        			欢迎加入豆瓣
        		</div>
        		<div className="mobile">
        			<input type="text" name="username" placeholder="邮箱/手机号" />
              <input type="password" name="pw" placeholder="密码(最少6位)" />
              <input type="text" name="pw" placeholder="昵称" />
        			<button>注册</button>
        		</div>
        		<div className="mobile_nav">
        			<Link to="/login">返回登录</Link>
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

const Register = connect(mapStateToProps, mapDispatchToProps)(RegisterUI);

export default Register;