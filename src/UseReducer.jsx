import React, { useReducer } from 'react';

const UseReducer = () => {

    const initialState = 0;

    const reducer = (state, action) => {
        if (action.type == "increment") {
            state = state + 1;
        }
        else {
            state = state - 1;
        }
        return state;
    }


    const [state, dispatch] = useReducer(reducer, initialState);


    return (
        <>
            <h1>{state}</h1>
            <button type='button' onClick={() => { return dispatch({ type: "increment" }); }}>Increment</button>
            <button type='button' onClick={() => { return dispatch({ type: "decrement" }); }}>Decrement</button>
        </>
    )
}
export default UseReducer;