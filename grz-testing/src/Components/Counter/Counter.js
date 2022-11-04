import React,{ useReducer }  from 'react';
import counterReducer from './CounterReducer';
import {initialState} from './CounterInitialState';

const Counter = () => {
    
    const [state, dispatch] = useReducer(counterReducer, initialState);
    const { value } = state;

    return (
        <div>
            <label>{value}</label>
            <button onClick={() => dispatch({ type: 'increse' })}>Increse</button>
            <button onClick={() => dispatch({ type: 'decrese' })}>Decrese</button>
        </div>
    );
};

export default Counter;