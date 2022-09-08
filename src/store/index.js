import { createStore } from "react-redux";


const reducerFn = (state = {counter: 0}, action) => {
    if (action.type==="INC") {
        return {state: state.counter++};
    }

    return state;                                                                                                                     
}


const store = createStore(reducerFn);

export default store;