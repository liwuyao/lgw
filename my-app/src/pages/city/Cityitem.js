import React, { Component } from 'react';
import {hashHistory} from 'react-router';
import PropTypes from 'prop-types';

class Cityitem extends React.Component{
	render(){
		let {cits} = this.props;
		return(
			<li className={this.props.state1} onTouchStart={(e)=>{this.btncity(e)}} onTouchEnd={(e)=>{this.btncity2(e)}} >
				{cits}
			</li>
		)
	}
	btncity(e){
		var namechange = e.target.innerHTML;
			e.target.className="citynames2"
			this.props.btnchangeto(namechange);
	}
	btncity2(e){
			e.target.className="citynames"
	}
};
export default Cityitem;