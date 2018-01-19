import {createStore} from 'redux';
//Action generators
const incrementCount = ({incrementBy=1} = {}) => ({//destructuring in action.
  type: 'INCREMENT',
  incrementBy: incrementBy
});
const decrementCount = ({decrementBy=1}={}) => (
  {
    type:'DECREMENT',
    decrementBy:decrementBy
  }
);
const setCount = ({count})=> (
  {
    type: 'SET',
    count:count
  }
);
const resetCount = () =>({
  type:'RESET',
  count:0
});
//Reducers
//they are pure functions
//Never change state or action
const countReducer = (state={count:0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
    return { count: state.count+action.incrementBy };
    case 'DECREMENT':
    return {count:state.count -action.decrementBy}
    case 'RESET':
    return {count:0};
    case 'SET':
    return {count:action.count};
    default:
    return state;
  }
};
const store = createStore(countReducer);
store.subscribe(() => {
  console.log(store.getState());
});
//store.dispatch({type:'INCREMENT',incrementBy:5});
store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(incrementCount());
store.dispatch(decrementCount());
store.dispatch(setCount({count:20}));
store.dispatch(decrementCount({decrementBy: 21}));
store.dispatch({type:'RESET'});
