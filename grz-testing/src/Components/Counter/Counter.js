import React,{ useReducer }  from 'react';
import counterReducer from './CounterReducer';
import {initialState} from './CounterInitialState';

const Counter = () => {
    
    const [state, dispatch] = useReducer(counterReducer, initialState);
    const { value,loading } = state;

    if(loading){
        return <div>asas</div>
    }

    return (
        <div>
            <label>{value}---{loading}</label>
            <button onClick={() => dispatch({ type: 'increse' })}>Increse</button>
            <button onClick={() => dispatch({ type: 'decrese' })}>Decrese</button>
        </div>
    );
};

export default Counter;