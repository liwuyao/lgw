import React, { Component } from 'react';
import {Link,IndexLink } from 'react-router';
import {browserHistory} from 'react-router';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
//  	{this.props.children}
      <div className="App">
      	
        <div className="App-header">拉勾网</div>
      	<div className="App-content">
      	{this.props.children}
      	</div>
        <div className="App-footer">
        		<ul>
        			<IndexLink to="/job" activeClassName="active">
        			<div>
        			<i className="iconfont icon-fangzi " ></i>
        			<li>职位</li>
        			</div>
        			</IndexLink>
        		</ul>
        		<ul>
        			<Link to="/search" activeClassName="active">
        			<div>
        			<i className="iconfont icon-sousuo "></i>
        			<li>搜索</li>
        			</div>
        			</Link>
        		</ul>
        		<ul>
        			<Link to="/main" activeClassName="active">
        			<div>
        			<i className="iconfont icon-wode"></i>
        			<li>我的</li>
        			</div>
        			</Link>
        		</ul>
        </div>
      </div>
    );
  }
}

export default App;
