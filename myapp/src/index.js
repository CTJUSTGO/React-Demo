import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from "./redux/store.js";
import $ from 'jquery';
import { Provider } from "react-redux";


function render() {
    ReactDOM.render(
        <Provider store={store}> 
            <App />
        </Provider>,
        document.getElementById('root'));
}
render();

store.subscribe(render);



registerServiceWorker();

