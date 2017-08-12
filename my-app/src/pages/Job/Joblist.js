import React, { Component } from 'react';
import {hashHistory} from 'react-router';
import PropTypes from 'prop-types';

class Jobitem extends React.Component{
   	  render(){
   	  	 let {job} = this.props
   	  	 return (
		         <li className="activeable list-item">
		            <img src={"//www.lgstatic.com/"+job.companyLogo} className="item-logo" />
		            <div className="item-desc">
		                <h2 className="item-title">{job.companyFullName}</h2>
		                <p className="item-info">
		                    <span className="item-pos">
		                        {job.positionName}
		                    </span>
		                    <span className="item-salary">{job.salary}</span>
		                </p>
		                <p className="item-time">{job.createTime}</p>
		            </div>
		        </li>

   	  	 	)
   	  }
   }
export default Jobitem;