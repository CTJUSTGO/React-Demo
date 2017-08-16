import { createStore, applyMiddleware  } from "redux";
import reducer from "./reducer.js";
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import getData from './ajax.js';
var logger=new createLogger();

var state = {
    head:{
        open:false,
        titleList:["首页","影片","影院","商城","演出","我的","卖座卡"],
        routerUrl:["/","/film","/cinema","/show","/ticket","/login","/card"],

    },
    headTitle:"卖座电影",
   
    lunbo:{
        dataList:[],
        isStart:""
    },
    nowplay:{
        dataList:[],
        isStart:""
    },
    soonplay:{
        dataList:[],
        isStart:""
    },
    detail:{
        dataList:[],
        isStart:""
    },
    cinema:{
        dataList:[],
    }
    // getData:function(postTitle,url){
    //     getData(postTitle,url);
    //     // Q:
    // },
    
}

var store = createStore(reducer, state, applyMiddleware(thunk, logger));


export default store;