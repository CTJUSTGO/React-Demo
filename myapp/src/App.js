import React, { Component } from 'react';
import { Button, Icon } from 'antd-mobile';
import "./css/app.scss";
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import Head from "./component/head.js";
import Home from "./component/home.js";
import Film from "./component/film.js";
import Cinema from "./component/cinema.js";
import Show from "./component/show.js";
import Ticket from "./component/ticket.js";
import Login from "./component/login.js";
import Card from "./component/card.js";
import { connect } from 'react-redux';
import Detail from './component/detail.js'
class Apps extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<div>
						<Head/>
						<Route exact path="/"  component={Home}  />
            			<Route path="/film"  component={Film}  />
            			<Route path="/cinema"  component={Cinema}  />
						<Route path="/show"  component={Show}  />
						<Route path="/ticket"  component={Ticket}  />
						<Route path="/login"  component={Login}  />
						<Route path="/card"  component={Card}  />
						<Route path="/detail/:id"  component={Detail}  />

					
					</div>
				</Router>
			</div>
		);
	}
}
//Q:路由怎么传参
var App=connect(
	function(state,ownProps){

	},function(dispatch,ownProps){

	})(Apps)
export default App;
