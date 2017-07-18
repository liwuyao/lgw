import React, { Component } from 'react';
import {hashHistory} from 'react-router';
import PropTypes from 'prop-types';

class Abname extends React.Component{
	render(){
		let {cits2} = this.props;
		return(
			<li className="citynames">
				{cits2}
			</li>
		)
	}
};
export default Abname;