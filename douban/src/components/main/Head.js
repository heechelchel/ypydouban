import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';
class Head extends Component {
	constructor(){
		super();
		this.componentDidMount = this.componentDidMount.bind(this)
		this.state={
			nu:""
		}
	}
	render() {
		return (
			<div id="head">
				<Link to="/" className="logo"><img alt="" src="https://img3.doubanio.com/f/ypy/5b18ed9f97e03c20fcbbbd0dfc979c8a0fda6ced/pics/lg_ypy_w.png"/></Link>
				<Link to="/Movie" className="loginName"></Link>
				<Link to="/Login" className="login">登录</Link>
			</div>
		)
	}
	componentDidMount(){
		var ck = document.cookie;
        this.nu = unescape(unescape(document.cookie.substring(9)));
        var p = document.querySelector("#head .loginName");
        var l = document.querySelector('#head .login')
        if(ck){
          p.innerText = this.nu;
          l.innerText = "退出"
          l.onclick = function(){
          	alert(1)
          }
        }
	}
}

export default Head;