import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import { Drawer, List, NavBar } from 'antd-mobile';
import { connect } from 'react-redux';

class Heads extends Component {

    render() {
        var that=this;
        var display=this.props.open?"":"none"
        const sidebar = (<List>
            {this.props.titleAry.map((i, index) => {
                return (
                    <List.Item key={index}>
                        <Link to={that.props.url[index]} onClick={this.props.onOpenChange}>{i}</Link>
                    </List.Item>);
            })}
        </List>);

        return (<div>
            <NavBar iconName="ellipsis" onLeftClick={this.props.onOpenChange} style={{background:"#282828",fontSize:"14px"}}>{this.props.title}</NavBar>
            <Drawer
                className="my-drawer"
                style={{ minHeight: document.documentElement.clientHeight - 200 ,top:"90px",display:display}}
                enableDragHandle
                contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
                sidebar={sidebar}
                open={this.props.open}
                onOpenChange={this.props.onOpenChange}
                touch={false}
                sidebarStyle={{background:"#282828"}}

            >
      </Drawer>
        </div>);
    }
}

var Head = connect(function (state, ownProps) {
    return {
        title:state.headTitle,
        open: state.head.open,
        titleAry:state.head.titleList,
        url:state.head.routerUrl
    }
},
function (dispatch, ownProps) {
    return {
        onOpenChange: function () {
            dispatch({
                type:"CHANGE_OPEN",
            })
        }
    }
})(Heads)
export default Head;