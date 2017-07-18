import React, { Component } from 'react';
import {hashHistory} from 'react-router';
import PropTypes from 'prop-types';
import './Search.css';

class Search extends Component {
	render(){
		return(
			<div>
				<div className="linputer">
					<div className="lbutton">
						<span className="city">全国</span>
						<span className="cityicon"></span>
					</div>
					<div className="rinput">
						<input className="inputer" type="text" placeholder="搜索职位或公司"/>
						<span className="search"><em className="searchicon"></em></span>
					</div>
				</div>
			</div>
		);
	}
}
export default Search;