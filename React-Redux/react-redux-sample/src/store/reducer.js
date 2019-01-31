//Initial State
const initialstate = {
    age:21
};
    

//Reducer
const reducer = (state= initialstate,action)=>
{
    const newState = {...state};
    if(action. type == 'AGE_UP'){
    newState.age++;
    }
    if(action. type == 'AGE_DOWN'){
    newState.age--;
    }
    return newState;
}

export default reducer;