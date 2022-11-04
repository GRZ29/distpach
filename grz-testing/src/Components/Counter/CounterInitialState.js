export const initialState = {
    value: window.localStorage.getItem(`COUNTER`)?
           JSON.parse(window.localStorage.getItem(`COUNTER`)): 
           0,
};