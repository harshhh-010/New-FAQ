import { createStore } from 'redux';
import faqReducer from './reducers';

const store = createStore(faqReducer);

export default store;
