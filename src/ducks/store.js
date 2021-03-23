import {createStore, combineReducers, applyMiddleware} from 'redux'
import budgetReducer from './budgetReducer'
import userReducer from './userReducer'
import promiseMiddleware from 'redux-promise-middleware'

const rootReducer = combineReducers({
    budget: budgetReducer,
    user: userReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))