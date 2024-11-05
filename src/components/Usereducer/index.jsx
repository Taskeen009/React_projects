import { act, useReducer, useState } from "react"
const Reducer = () => {

    //const [count,setCount]=useState(0)
    //useReducer(reducer,state)
    const initialstate = { count: 0 }

    const reducer = (state, action) => {
        // return {count:state.count+1}
        switch (action.type) {
            case 'increase':
                {
                    return { count: state.count + 1 }
                }
            case 'input':
                {
                        return { count: action.payload }
                }
            case 'decrease':
                {
                    return { count: state.count - 1 }
                }

            default: {
                return state
            }
        }
    }
    const [state, dispatch] = useReducer(reducer, initialstate)
    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({ type: 'increase' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrease' })}>-</button>
            <br />
            <input 
            value={state.count}
            onChange={(e)=>dispatch({type:'input','payload':Number(e.target.value)})} type="number" />
        </div>
    )
}

export default Reducer