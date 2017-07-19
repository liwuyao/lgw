import React, { Component } from 'react';
import {hashHistory} from 'react-router';
import PropTypes from 'prop-types';

class Citylist extends React.Component{
	render(){
		var sendnameStr=this.props.sendnameStr;
		var getlist=this.props.sendlist;
		var state=this.props.state1;
		var btnchange=this.props.btnchangeto;
		var result = getlist.map(function(elem,index) {				
			return elem.cityList.map(function(e,ix){
					if(elem.nameStr==sendnameStr){
						return <Cityname cits3={e} state2={state} btnchangeto2={btnchange}/>;
					}
				})				
          })
		return(
			<div>
			<p>{sendnameStr}</p>
				{result}
			</div>
		)
	}
}
	class Cityname extends React.Component{
		render(){
			var cits3 = this.props.cits3;
			
			return(
				<li className={this.props.state2} onTouchStart={(e)=>{this.btncity(e)}} onTouchEnd={(e)=>{this.btncity2(e)}} >
					{cits3}
				</li>
			)
		}
		btncity(e){
				e.target.className="citynames2";
		}
		btncity2(e){
			var namechange = e.target.innerHTML;		
			this.props.btnchangeto2(namechange,"linputer");
			e.target.className="citynames";
		}
	}
export default Citylist;