import React, { Component } from 'react';
import {hashHistory} from 'react-router';
import PropTypes from 'prop-types';

class Ghname extends React.Component{
	render(){
		let {cits3} = this.props;
		return(
			<li className="citynames">
				{cits3}
			</li>
		)
	}
}
export default Ghname;