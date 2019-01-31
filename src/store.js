import { createStore , applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store= createStore(
  rootReducer, 
  initialState,  
   compose(
     applyMiddleware(...middleware),
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
     )
  );
//requires 3 things: 
//1st = root reducer
//2nd = initialState
//3rd = enhancers (apply middleWare()). koritimo compose ako želimo multiple enhancers - compose je import from 'redux'


export default store;