import React, { Component } from 'react';
import "../css/cinema.scss";
import $ from 'jquery';
import getData from '../redux/ajax.js';
import { connect } from 'react-redux';
import change from '../redux/change.js';
import { Accordion, List } from 'antd-mobile';





class Cinemas extends Component{
render() {
    console.log(this.props.cinema)
    return (
      <div style={{ marginTop: 10, marginBottom: 10 }}>
        <Accordion defaultActiveKey="0" className="my-accordion" >
          <Accordion.Panel header="宝安区" >
             {this.props.cinema.map(function(item,index){
                 if(item.district.name=="宝安区"){
                     return <div className="cinema" >
                         <div className="txt">
                             <h2>{item.name}</h2>
                             <p>{item.address}</p>
                         </div>
                         </div>
                 }
             })} 

          </Accordion.Panel>
            <Accordion.Panel header="龙华新区">
             {this.props.cinema.map(function(item,index){
                 if(item.district.name=="龙华新区"){
                     return <div className="cinema">
                         <div className="txt">
                             <h2>{item.name}</h2>
                             <p>{item.address}</p>
                         </div>
                         </div>
                 }
             })} 

          </Accordion.Panel>     

        </Accordion>
      </div>
    );
  }
    componentDidMount(){
        console.log(1);
        getData('GET_CINEMA','http://localhost:8080/cinema');
        change('全部影院');

    }
}
var Cinema=connect(function(state,ownProps){
    return {
        cinema:state.cinema.dataList,
    }
})(Cinemas)

export default Cinema;