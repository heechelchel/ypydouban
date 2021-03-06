import React from 'react';
import ReactDOM from 'react-dom';
import App from './router/index';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import MainReducer from './reducers/MainReducer';
import AsetReducer from './reducers/AsetReducer';
import './style/index.scss';

const recuders = combineReducers({
	list: MainReducer,
	aset_list:AsetReducer
})
const store = createStore(recuders, {});


function renderPage() {
	ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
}

renderPage();

store.subscribe(renderPage);

registerServiceWorker();
