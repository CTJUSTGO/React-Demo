import store from "./store.js";
function change(title){
    store.dispatch({
        type:'CHANGE_TITLE',
        title:title
    })

}
export default change;