import React, { Component } from 'react';
import "../css/film.scss";
import $ from 'jquery';
import getData from '../redux/ajax.js';
import { connect } from 'react-redux';
// class Film extends Component{
//     render(){
//         return <h1>这是Film</h1>
//     }
// }
import { Tabs, WhiteSpace } from 'antd-mobile';
import change from '../redux/change.js';

const TabPane = Tabs.TabPane;

class Films extends Component{
    render(){
        return (
            <div className="films">
    <Tabs defaultActiveKey="2" swipeable={false} >
      <TabPane tab="正在热映" key="1">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', backgroundColor: '#fff' }}>
             {
                            this.props.imgarr.map(function(item,index){
                                return  <a href={"#/detail/"+item.id} className="box">
                                    <li key={index}><img src={item.poster.origin}/>
                                   <div className="left">
                                            <div className="grade">{item.grade}</div>
                                            <h2>{item.name}</h2>
                                            <p>{item.intro}</p>
                                            <p>{item.cinemaCount}家影院上映，{item.watchCount}人购票</p>
                                            
                                        </div>
                                    </li>
                                </a>
                                
                            })
                        }
        </div>
      </TabPane>
      <TabPane tab="即将上映" key="2">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', backgroundColor: '#fff' }}>
             {
                            this.props.soonlist.map(function(item,index){
                                return  <a href={"#/detail/"+item.id} className="box">
                                    <li key={index}><img src={item.poster.origin}/>
                                   <div className="left">
                                            <div className="grade">{item.grade}</div>
                                            <h2>{item.name}</h2>
                                            <p>{item.intro}</p>
                                            <p>{item.cinemaCount}家影院上映，{item.watchCount}人购票</p>
                                            
                                        </div>
                                    </li>
                                </a>
                                
                            })
                        }
        </div>
      </TabPane>
    </Tabs>
    <WhiteSpace />
  </div>
        )
    }
    componentDidMount(){
        var that=this;
        var count=14;
        $(window).scroll(function(){
            
            if($('body').scrollTop()+window.innerHeight>document.body.clientHeight-200&&!that.props.isStart&&count<=42){
                
                
                getData('GET_IMG','http://localhost:8080/home/imgarr?count='+count);
                getData('GET_COME','http://localhost:8080/home/come?count='+count);
                count=count+7;
            }
        })
        console.log('ct');
        getData('GET_IMG','http://localhost:8080/home/imgarr?count=7');
        getData('GET_COME','http://localhost:8080/home/come?count=7');
        change('卖座电影');
    }
    
}
var Film=connect(function(state,ownProps){
    console.log(state.nowplay.isStart)
    return {
        imgarr:state.nowplay.dataList,
        soonlist:state.soonplay.dataList,
        isStart:state.nowplay.isStart,
        
    }
})(Films)

export default Film;


