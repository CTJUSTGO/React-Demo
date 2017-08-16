function reducer(state, action) {
    switch (action.type) {
        case "CHANGE_OPEN":
            return Object.assign({}, state, {
                head: {
                    open:!state.head.open,
                    titleList:state.head.titleList,
                    routerUrl:state.head.routerUrl,
                }
            })
        case "CHANGE_TITLE":{
            return Object.assign({},state,{
                headTitle:action.title
            })
        }
        case "GET_DEFAULT_START":
            // 请求开始
            return Object.assign({}, state, {
                lunbo:{
                    isStart:true,
                    dataList:[]
                }
            })

        case "GET_DEFAULT_END":
            // 请求成功
            console.log(action.list);
            return Object.assign({}, state, {
               lunbo:{
                dataList:action.list.billboards,
                isStart: false
               }
            })
         case "GET_IMG_START":
            // 请求开始
            return Object.assign({}, state, {
                nowplay:{
                    isStart:true,
                    dataList:state.nowplay.dataList
                }
            })

        case "GET_IMG_END":
            // 请求成功
            console.log(action.list);
            return Object.assign({}, state, {
                nowplay:{
                    dataList:action.list.films,
                    isStart: false
                }
               
            })    
         case "GET_COME_START":
        // 请求开始
        return Object.assign({}, state, {
            soonplay:{
                isStart:true,
                dataList:state.soonplay.dataList
            }
        })

        case "GET_COME_END":
            // 请求成功
            
            return Object.assign({}, state, {
                soonplay:{
                    dataList:action.list.films,
                    isStart: false
                }
               
            }) 
          case "GET_DETAIL_START":
        // 请求开始
        return Object.assign({}, state, {
            detail:{
                isStart:true,
                dataList:[]
            }
        })   
         case "GET_DETAIL_END":
            // 请求成功
            console.log(action.list);
            return Object.assign({}, state, {
                detail:{
                    dataList:action.list.film,
                    isStart: false,

                },
                headTitle:action.list.film.name
               
            }) 
        case "GET_CINEMA_END":
            return Object.assign({},state,{
                cinema:{
                    dataList:action.list.cinemas,
                }
            })        
        default:
            return state
    }
}

export default reducer;