import { createStore, applyMiddleware, compose } from 'redux'
import ContactReducer from './redux/reducers'
import thunk from 'redux-thunk'


 const store = createStore(
    ContactReducer, 
    compose(
        applyMiddleware(thunk),
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store