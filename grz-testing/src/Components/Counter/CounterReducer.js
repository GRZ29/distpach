import React from 'react';
import CounterFunctions from './CounterFunctions';

const CounterReducer = (state,action) => {
    switch (action.type) {
        case 'increse': {
          return {
            ...state,
            //value: state.value + 1
            value: CounterFunctions.Sum(state.value)
          }
        }

        case 'decrese': {
            return {
              ...state,
              //value: state.value - 1,
              value: CounterFunctions.Res(state.value)
            }
          }
    }
};

export default CounterReducer;