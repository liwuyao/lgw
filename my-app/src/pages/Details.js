import React, { Component } from 'react';
import './Details.css';

class Details extends Component{
	constructor(){
		super();
		
	}
	render(){
		return(
			<div>
			<div className="head">
				职位详情
				<div className="left">
					<a className="corner" href="JavaScript:history.back(-1)"></a>
				</div>
				<div className="right">	
					<a className="corner" href="http://localhost:3000/#/?_k=0aa60x"></a>
				</div>
			</div>
			<div className="content">
		        <div className="postitle">
		            <h2 className="title">运营实习生</h2>
		            <div className="collicon activeable">
		                <span className="icon notcoll"></span>
		                <span className="text">未收藏</span>
		            </div>
		        </div>
	
		        <div className="detail">
		            <div className="items">
		                <span className="item salary">
		                    <em className="icon"></em>
		                    <span className="text">2k-3k</span>
		                </span>
	                    <span className="item workaddress">
	                        <em className="icon"></em>
	                        <span className="text">上海</span>
	                    </span>
	                    <span className="item jobnature">
	                        <em className="icon"></em>
	                        <span className="text">全职</span>
	                    </span>
		                <span className="item workyear">
	                        <em className="icon"></em>
	                        <span className="text">应届毕业生</span>
	                    </span>
		                <span className="item education">
		                    <em className="icon"></em>
		                    <span className="text">本科及以上</span>
		                </span>
		            </div>
		            <div className="temptation">
		                职位诱惑：旅游大佬等你来
		            </div>
		        </div>
	
	        	<div className="company activeable">
	            	<img src="//www.lgstatic.com/image1/M00/00/0E/Cgo8PFTUWCWAOQHbAABtwKGNZK8276.png" alt="" className="logo"/>
	            	<div className="desc">
	                	<div className="dleft">
	                      <h2 className="title">携程</h2>
	                      <p className="info">移动互联网,旅游/ 上市公司/ 2000人以上</p>
	                    </div>
	                    <span className="dright"></span>
	                </div>
	            </div>
	           	<div className="positiondesc">
		            <header className="header">
		                职位描述
		            </header>
		            <div className="content_word">
		                <p>工作职责：</p>
						<p>1.负责线上产品底层数据的维护；</p>
						<p>2.负责上线各供应商活动，并跟踪活动效果；</p>
						<p>3.负责分析相关运营数据，并协助策划应对的营销方案；</p>
						<p>4.协助上级完成其他运营类工作</p>
						<p className="sign">任职资格：</p>
						<p>1.985、211本科及以上学历，有英文沟通能力者尤佳</p>
						<p>2.有较强的数据敏感性，熟练excel等office软件；</p>
						<p>3.善于独立思考，思路敏捷，条理清晰，具备有效、友好的沟通技巧和学习能力；</p>
						<p></p>
		            </div>		      
		        </div>
		        <div className="positioneval">
		            <div className="eval-title">
		                面试评价
		                <span id="total">
		                	(
		                	<span>2</span>
		                	)
		                </span>
		            </div>
           			<ul className="list">
            			<li className="list-item">
                			<div className="info-wrap">
                    			<img src="//www.lgstatic.com/images/myresume/default_headpic.png" alt="reviewer avatar"/>
                    			<span className="name">
                        			范*欢
                    			</span>
                    			<span className="time">2017/03/08</span>
                    			<ul className="score-wrap">
                        			<li>
                            			<span className="type">综合评分</span>
                           				<span className="score">5</span>
                        			</li>                       
			                        <li>
			                            <span className="type">描述符合</span>
			                            <span className="score">5</span>
			                        </li>
			                        <li>
			                            <span className="type">面试官</span>
			                            <span className="score">5</span>
			                        </li>
			                        <li>
			                            <span className="type">公司环境</span>
			                            <span className="score">5</span>
			                        </li>                       
                    			</ul> 
                			</div>
               				<ul className="tags-wrap">               
			                    <li>面试官很nice</li>
			                	<li>面试效率高</li>
			                	<li>环境高大上</li>			                
			                </ul>
               				<div className="review-content">
                    			面试过程：面试官很亲切，希望能加入。
                   				<span className="dn">&nbsp;</span>
                			</div>
                
			                <div className="zan-wrap">
			                    <span className="zan" data-id="587257">
			                        <i></i>
			                        <span className="count">
			                        	有用(<span>23</span>)
			                        </span>
			                    </span>
			                </div>
            			</li>
			            <li className="list-item">
			                <div className="info-wrap">
			                    <img src="//www.lgstatic.com/images/myresume/default_headpic.png" alt="reviewer avatar"/>
			                    <span className="name">
			                        张*
			                    </span>
			                    <span className="time">2017/03/06</span>
			                    <ul className="score-wrap">
			                        <li>
			                            <span className="type">综合评分</span>
			                            <span className="score">3</span>
			                        </li>
			                        
			                        <li>
			                            <span className="type">描述符合</span>
			                            <span className="score">3</span>
			                        </li>
			                        <li>
			                            <span className="type">面试官</span>
			                            <span className="score">4</span>
			                        </li>
			                        <li>
			                            <span className="type">公司环境</span>
			                            <span className="score">4</span>
			                        </li>
			                        
			                    </ul> 
			                </div>
			                <ul className="tags-wrap">		                
			                    <li>面试官很nice</li>			                
			                    <li>环境高大上</li>			                
			                    <li>薪资与描述不符</li>			             
			                </ul>
			                <div className="review-content">
			                    面试过程：大楼简直气派 面试官很好 我因为英文不好 直接没机会了 觉得耽误对方时间了 但面试官非常友善 一直跟我说 英文很重要 要我加油学英文			                    
			                    <span className="dn">&nbsp;</span>
			                </div>		                
			                <div className="zan-wrap">
			                    <span className="zan" data-id="584615">
			                        <i></i>
			                        <span className="count">有用(<span>95</span>)
			                        </span>
			                    </span>
			                </div>
			            </li>
        			</ul>
            		<a className="eval-all" href="/user/expsList_2807960.html"></a>   
        		</div>
	      		<div className="deliver" id="deliver_resume">投个简历</div>
			</div>  
  			
		
			
		
		        
	</div>	
		)
	}
	
}
export default Details