let Validate = {
    ValidateData(name,item){
        window.localStorage.setItem(`${name}`,JSON.stringify(item))
        return JSON.parse(window.localStorage.getItem(`${name}`));
    }
}

let CounterFunctions = {

    Sum(state){
        let result = state+ 1;
        return Validate.ValidateData(`COUNTER`,result)
    },
    Res(state){
        let result = state- 1;
        return Validate.ValidateData(`COUNTER`,result)
    },
    
};

export default CounterFunctions;