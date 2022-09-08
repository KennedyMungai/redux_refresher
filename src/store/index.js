import { createStoreHook } from "react-redux";


const reducerFn = (state = {counter: 0}, action) => {
    if (action.type==="INC") {
        return {counter: state.counter++};
    }

    return state;                                                                                                                     
}


const store = createStoreHook(reducerFn);

export default store;