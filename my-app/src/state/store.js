import { createStore } from 'redux';
import transactionReducer from './transaction-reducer';

const store = createStore(transactionReducer);

export default store;