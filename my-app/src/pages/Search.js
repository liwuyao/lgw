import React, { Component } from 'react';
import {hashHistory} from 'react-router';
import PropTypes from 'prop-types';
import './Search.css';
import Citylist  from './city/Citylist';
import Searchresult  from './city/Searchresult';
import $ from 'jquery';
class Search extends Component {
	constructor(){
		super();
		this.btnsearch =  this.btnsearch.bind(this);
		this.btnchange =  this.btnchange.bind(this);
		this.btnsearchEnd =  this.btnsearchEnd.bind(this);
		this.seacrchbtn =  this.seacrchbtn.bind(this);
		this.searchchange =  this.searchchange.bind(this);
		this.Startsearch =  this.Startsearch.bind(this);
		this.deletedata =  this.deletedata.bind(this);
		this.add =  this.add.bind(this);
		this.state={
			ciy:"ciy",
			joblist:"",
			searchclass:"lbutton",
			btncityclass:"citynames",
			linputerclass:"linputer",
			searchbtnclass:"out",
			historyclass:"out",
			titlehtml:"全国",
			searchval:"",
			searchname:"",
			result:"请输入信息",
			startsearch:[""],
			cities:[{
							 	"cityList": ["北京", "上海", "广州", "深圳", "成都", "杭州"],
							 	"name": "热门城市",
							 	"nameStr": "热门城市"
							 }, {
							 	"cityList": ["保定", "北京", "包头", "长春", "成都", "重庆", "长沙", "常州", "沧州", "东莞", "大连", "东营", "德阳", "佛山", "阜阳", "福州"],
							 	"name": "",
							 	"nameStr": "ABCDEF"
							 }, {
							 	"cityList": ["桂林", "贵阳", "广州", "赣州", "淮安", "邯郸", "哈尔滨", "合肥", "呼和浩特", "海口", "黄石", "杭州", "惠州", "湖州", "金华", "九江", "江门", "济南", "济宁", "嘉兴", "揭阳", "晋中"],
							 	"name": "",
							 	"nameStr": "GHIJ"
							 }, {
							 	"cityList": ["昆明", "廊坊", "拉萨", "丽水", "临沂", "洛阳", "连云港", "兰州", "柳州", "泸州", "茂名", "绵阳", "梅州", "宁波", "南昌", "南充", "南京", "南宁", "南通", "南阳"],
							 	"name": "",
							 	"nameStr": "KLMN"
							 }, {
							 	"cityList": ["莆田", "青岛", "秦皇岛", "清远", "泉州", "日照"],
							 	"name": "",
							 	"nameStr": "OPQR"
							 }, {
							 	"cityList": ["韶关", "上海", "石家庄", "汕头", "绍兴", "沈阳", "三亚", "深圳", "苏州", "泰安", "天津", "唐山", "太原", "台州", "泰州"],
							 	"name": "",
							 	"nameStr": "STUV"
							 }, {
							 	"cityList": ["潍坊", "武汉", "芜湖", "威海", "乌鲁木齐", "无锡", "温州", "西安", "香港特别行政区", "厦门", "西宁", "新乡", "咸阳", "徐州", "盐城", "银川", "烟台", "扬州", "淄博", "珠海", "镇江", "湛江", "肇庆", "中山", "郑州", "漳州", "株洲"],
							 	"name": "",
							 	"nameStr": "WXYZ"
							 }]
		} 
	}
	render(){
		var state=this.state.btncityclass;
		var list=this.state.cities;
		var btnchange=this.btnchange;
		var add = this.add
		var deleteto = this.deletedata;
		var List = this.state.cities.map(function(elem,index) {
						return <Citylist sendnameStr={elem.nameStr} sendlist={list} state1={state} btnchangeto={btnchange} key={index}/>
          })
		var historyDom=this.state.startsearch.map(function(elem,index){
						return <Historydom sethistory={elem} sendDelete={deleteto} adds={add} key={index}/>
		})
		return(
			<div>
				<div className={this.state.linputerclass}>
					<div className={this.state.searchclass} onTouchStart={this.btnsearch} onTouchEnd={this.btnsearchEnd}>
						<span className="city">{this.state.titlehtml}</span>
						<span className="cityicon"></span>
					</div>
					<div className="rinput">
						<input className="inputer" type="text" placeholder="搜索职位或公司" onChange={this.searchchange} onFocus={this.Startsearch} value={this.state.searchname} />
						<span className="search" onTouchEnd={this.seacrchbtn}><em className="searchicon"></em></span>
									
					</div>
				</div>
				<div className={this.state.historyclass}>{historyDom}</div>
				{/*职位列表和加载更多*/}
				<div className={this.state.searchbtnclass} >
					{this.state.result}
				</div>
				{/*城市名字块*/}
				<div className={this.state.ciy}>
					{List}
				</div>
			</div>

		);
	}
//即将搜索
	Startsearch(){
		var historysearch=localStorage.historys;
		var b = JSON.parse(historysearch)
		this.setState({
			startsearch:b,
			historyclass:"historybox",
			searchbtnclass:"out"
		})
	}
//删除传输函数
	deletedata(val){
		this.setState({
			startsearch:val
		})
	}
//添加
	add(val,out){
		this.setState({
			searchname:val,
			historyclass:out
		})
	}
//搜索东西函数
	searchchange(e){
		var intro =e.target.value;
		var aryy=[]
		this.setState({
			searchname:intro,
			result:""
		})
	}
//	搜索按钮函数
	seacrchbtn(){
		var This = this;
		var cityName=this.state.titlehtml;
		var intro = this.state.searchname;
		var sendTo={
			toName:cityName,
			totro:intro
		}
		var historysearch=localStorage.historys;
		if(cityName&&intro){
			var b = JSON.parse(historysearch)
			b.push(intro);
			var a = JSON.stringify(b);
			this.setState({
				searchbtnclass:"fadin",
				historyclass:"out",
				result:<Searchresult datas={sendTo}/>
			})
			localStorage.historys=a;	
		}
	}
//	城市按钮点击开始
	btnsearch(){
		this.setState({
        		searchclass:"lbutton2",
        		searchbtnclass:"out",
        		ciy:"ciy2",
        		historyclass:"out"
        })
	}
	btnsearchEnd(){
		this.setState({
			searchclass:"lbutton",	
			linputerclass:"out"
		})
	}
//	子组件传输
	btnchange(val,out){
		this.setState({
        		titlehtml:val,
        		linputerclass:"linputer",
        		ciy:"ciy"
        	})
	}
	
}
class Historydom extends Component{
	constructor(){
		super();
		this.deletechange =  this.deletechange.bind(this);
		this.choose =  this.choose.bind(this);
	}
	render(){
		return(
			<ul className="historyouter">
				<li className="history" onTouchStart={this.choose}>{this.props.sethistory}</li>
				<li className="deletebtn" onClick={this.deletechange}></li>
			</ul>
		)
	}
	choose(e){
		var value=e.target.innerHTML
		this.props.adds(value,"out")
	}
	deletechange(e){
	var value=e.target.previousSibling.innerHTML;
	var a = [1,2,3]
	var historydata=localStorage.historys;
	    historydata = JSON.parse(historydata)
    var index=historydata.indexOf(value);
    	historydata.splice(index,1);
    var data = JSON.stringify(historydata)
    	localStorage.historys=data;
   
 		this.props.sendDelete(historydata);
	}
}

export default Search;