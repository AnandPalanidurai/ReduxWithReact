const {createStore} = require('redux');


//Declare a initial state
const initialState= 
{
    age:21
};

//Reducer
const myReducer = (state= initialState,action)=>
{    
    //Always clone a copy don't mutate state
    const newState={...state}; 
    if(action.type==='ADD')
    {
    newState.age +=1;
    }
    if(action.type==='SUBTRACT')
    {
    newState.age -=1;
    }
    return newState;
}

const store = createStore(myReducer);

//OutPut:
// it('Output', () => {
//     console.log('initial state',JSON.stringify(store.getState())); //Print age as 21   

//     store.dispatch({type:'ADD'})
//     console.log('after add',JSON.stringify(store.getState())); //Print age as 22
    
//     store.dispatch({type:'SUBTRACT'})
//     console.log('afetr subtract',JSON.stringify(store.getState())); //Print age as 21
//   });

store.dispatch({type:'ADD'})
store.dispatch({type:'SUBTRACT'})

  //Output from store subscription
//   it('Output',()=>{
//     store.subscribe(()=>{
//         console.log('state changed', JSON.stringify(store.getState()))
//         })
//   })

  it('Output',()=>{
    store.subscribe(()=>{
        console.log('state changed', JSON.stringify(store.getState()))
        })
  })

//Reducer with action payload
//   const myReducer = (state= initialState,action)=>
//   {    
//       //Always clone a copy don't mutate state
//       const newState={...state}; 
//       if(action.type==='ADD')
//       {
//       newState.age +=action.val;
//       }
//       if(action.type==='SUBTRACT')
//       {
//       newState.age -=action.val;
//       }
//       return newState;
//   }



  //store.dispatch({type:'ADD',val:5})