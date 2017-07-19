import React, { Component } from 'react';
import {hashHistory} from 'react-router';
import PropTypes from 'prop-types';
import Jobitem  from '../Job/Joblist';
import Jobmore  from '../Job/Jobmore';
import '../Job.css';
class Searchresult extends Component{
	constructor(){
		super();
		this.btnChangemore = this.btnChangemore.bind(this);
		this.state={
			btnclass:"list-more",
			joblist:[{
                        "positionId": 2556858,
                        "positionName": "Web前端工程师",
                        "city": "成都",
                        "createTime": "昨天 09:56",
                        "salary": "20k-30k",
                        "companyId": 150134,
                        "companyLogo": "i/image/M00/5E/D2/CgqKkVfs3OaAaxyFAAO24Szt7Io547.png",
                        "companyName": "德誉网络",
                        "companyFullName": "成都德誉电子科技有限公司"
                    },
                    {
                        "positionId": 2735603,
                        "positionName": "Web前端Leader",
                        "city": "成都",
                        "createTime": "今天 08:49",
                        "salary": "18k-20k",
                        "companyId": 30148,
                        "companyLogo": "image1/M00/00/43/CgYXBlTUXNOAB9zQAACiK-dB8kg706.jpg",
                        "companyName": "海南航空",
                        "companyFullName": "海南航空股份有限公司"
                    },
                    {
                        "positionId": 2889754,
                        "positionName": "PHP架构师/PHP高级工程师",
                        "city": "成都",
                        "createTime": "昨天 09:53",
                        "salary": "20k-30k",
                        "companyId": 33179,
                        "companyLogo": "i/image/M00/30/1C/CgpFT1k5HyuAc11WAAEB4bMyYyg889.jpg",
                        "companyName": "掌麦科技",
                        "companyFullName": "四川掌麦科技有限公司"
                    },
                    {
					 	"positionId": 3260293,
					 	"positionName": "手游联运专员",
					 	"city": "广州",
					 	"createTime": "今天 14:49",
					 	"salary": "5k-10k",
					 	"companyId": 29750,
					 	"companyLogo": "image1/M00/00/42/Cgo8PFTUXM-ADbYaAABkFvdxFTs993.png",
					 	"companyName": "天拓游戏",
					 	"companyFullName": "广东星辉天拓互动娱乐有限公司"
					 }
			]
		}
	}
	render(){
		var list = this.state.joblist.map(function(elem,index) {
            	return <Jobitem job={elem} key={index}/>;
            })
		return(
			<div>
			{list}
			<Jobmore list={this.state.joblist} listmore={this.btnChangemore}/>
			</div>
		)
	}
	btnChangemore(val){
		this.setState({
        		joblist:val
        	})
	}
}
export default Searchresult;