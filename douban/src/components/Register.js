import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import axios from 'axios';
class RegisterUI extends Component {
  constructor(){
    super()
    this.register = this.register.bind(this)
  }
  register(){
     var that = this
     let params = { 
            uid : this.refs.name.value,
            password : this.refs.password.value
          };        
       axios.post('/api/zxw/register', params)
        .then(function (response) {
          if(response.data){
            alert(1)
            that.props.history.push('/login')
          }else{
            alert('注册失败')
          }
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
	render() {
		return (
			<div id="register">
        		<div className="head">
        			欢迎加入豆瓣
        		</div>
        		<div className="mobile">
        			<input type="text" name="uid" placeholder="邮箱/手机号" ref="name" />
              <input type="password" name="pw" placeholder="密码(最少6位)" ref="password"/>
              <input type="text"  placeholder="昵称" />
        			<button onClick={this.register}>注册</button>
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