import $ from 'jquery';
import store from "./store.js";
// function getData(obj,url,list,title){
//     $.get(url,function(res){
        
//         var response=JSON.parse(res);
//         console.log(response);
//         if(response.msg=='ok'){
//             obj.setState({[list]:response.data[title]});
//             //此处list属于对象的属性
//         }else{
//             getData(obj,url,list,title);
//         }
        
        
//     })

// }
function getAjax(postTitle,url){
    store.dispatch(function(dispatch){
         $.get(url,function(res){
            
            // var response=JSON.parse(res);
           
            if(res.msg=='ok'){
                
                dispatch({
                    type:postTitle+'_END',
                    list:res.data
                })
                return;
                //此处list属于对象的属性
            }else{
                getData(postTitle,url);
            }
        
        
        },"json")
    })
}
function getData(postTitle,url){
    store.dispatch(function(dispatch){
        dispatch({
            type:postTitle+'_START'
        });
        getAjax(postTitle,url);

    })
}
export default getData;