

import {createStore, combineRuducers} from 'redux';
import {Provider} from 'react-redux';
import WaimaiReducer from './reducers/WaimaiReducer';

const recuders = combineRuducers({
	list: WaimaiReducer
})
const store = createStore(recuders, {});

function renderPage() {
	React.render(<Provider store={store}><App/></Provider>, document......)
}

store.subscribe(renderPage);