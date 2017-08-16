import React, { Component } from 'react';
import "../css/detail.scss";
import $ from 'jquery';
import getData from '../redux/ajax.js';
import { connect } from 'react-redux';
import store from "../redux/store.js";

class Details extends Component{

    render(){
        console.log(this.props.obj)
        if(this.props.obj.cover){
            // Q:?输出
            console.log(this.props.obj)
             return (
                 <div>
                    <div className="top">
                        <img src={this.props.obj.cover.origin}/>
                    </div>
                    <div className="main">
                        <h2>影片简介</h2>
                        <p>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演:{this.props.obj.director}</p>
                        <p>演&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;员:{this.props.obj.actors.map(function(item,index){return item.name+"|"})}</p>
                        <p>地区语言:{this.props.obj.nation}</p>
                        <p>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型:{this.props.obj.category}</p>
                        <p>{this.props.obj.synopsis}</p>
                    </div>
                 </div>
                
            )
        }else{
            return <div></div>
        }
       
    }
    
    componentDidMount(){
        var that=this;
        store.dispatch(function(dispatch){
            getData("GET_DETAIL",'http://localhost:8080/detail?id='+that.props.match.params.id);
        })


        // 发送两个ajax

        // 第一个完成之后，在发送第二个

        // $.ajax(asfsadf, function() {
        //     // distpach(function() {

        //     //     $.ajax(asdfasdf, function() {

        //     //         distpath({
                        
        //     //         }) 
        //     //     })

        //     // })

        //     $.ajax(asfsadf, function() {
        //         distpach({
                    
        //         })
        //     })
        // })

         


        

        
       

    }
}
var Detail=connect(
    function(state,ownProps){
       
        return{
            obj:state.detail.dataList,
          
           
        }
    },function(dispatch,ownProps){
        return{
            
        }
    }
)(Details)
export default Detail;