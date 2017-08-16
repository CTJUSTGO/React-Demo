import React, { Component } from 'react';
import "../css/home.scss";
import Lunbo from "./lunbo.js";
import $ from 'jquery';
import getData from '../redux/ajax.js';
import { connect } from 'react-redux';
import change from '../redux/change.js';
class Homes extends Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //         imglist:[],
    //         imgarr:[]
            
    //     }
    // }
    componentDidMount() {
       
        // var that=this;
        // $.get('http://localhost:8080/lunbo', function(res) {
        //     var cao=JSON.parse(res);
        //     var list=cao.data.billboards;
        //     that.setState({list:list});
           
        // })
        console.log(this.props);
        this.props.getData('GET_DEFAULT','http://localhost:8080/home/lunbo');
        this.props.getData('GET_IMG','http://localhost:8080/home/imgarr');
        this.props.getData('GET_COME','http://localhost:8080/home/come');
        change('卖座电影');
  }
    render(){
         
        console.log(this.props.imgarr);
        console.log(this.props.soonlist)
        return (
            <div>
                <div>
                <Lunbo imglist={this.props.imglist}/>
                
                </div>
                <ul className="list">
                        {
                            this.props.imgarr.map(function(item,index){
                                return  <a href={"#/detail/"+item.id}>
                                    <li key={index}><img src={item.cover.origin}/>
                                    <div className="left">
                                        <p>{item.name}</p>
                                        <p>{item.cinemaCount}家影院上映，{item.watchCount}人购票</p>
                                    </div>
                                    
                                    <p className="grade">{item.grade}</p>
                                    </li>
                                </a>
                                
                            })
                        }
                </ul>
                <ul className="list">
                        {
                            this.props.soonlist.map(function(item,index){
                                return <a href={"#/detail/"+item.id}>
                                     <li key={index}><img src={item.cover.origin}/>
                                    <div className="left">
                                        <p>{item.name}</p>
                                        
                                    </div>
                                    
                                    <p className="date">7月21日上映</p>
                                </li>
                                </a>
                               
                            })
                        }
                </ul>
            </div>
            
            
        )
    }
     
}
var Home=connect(
    function(state,ownProps){
        console.log(state);
        return {
            imglist:state.lunbo.dataList,
            imgarr:state.nowplay.dataList,
            soonlist:state.soonplay.dataList,
            getData:getData
        }
    },function(dispatch,ownProps){
        return {
            // getData:getData
        }
    }
)(Homes)
export default Home;