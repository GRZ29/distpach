export const initialState = {
    value: window.localStorage.getItem(`COUNTER`)?
           JSON.parse(window.localStorage.getItem(`COUNTER`)): 
           0,
    loading: window.localStorage.getItem(`bool`)?
        JSON.parse(window.localStorage.getItem(`bool`)): 
        true,
};