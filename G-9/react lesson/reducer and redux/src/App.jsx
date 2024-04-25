import { useReducer } from 'react'
import './App.css'


function App() {

  const reducer = (state, action) => {
    // console.log(action);
    // return state += 1
    let { type, payload } = action
    switch (type) {
      case 'oshir': state = { ...state, son: state.son + 1 }; return state;
      case 'kamay': return state -= payload;
    }
  }

  let [count, dispatch] = useReducer(reducer, { son: 2 });

  return (
    <>
      <h1> {count.son}</h1>
      <button onClick={() => dispatch({ type: 'oshir', payload: 5 })} > + </button>
      <button onClick={() => dispatch({ type: "kamay", payload: 3 })} > - </button>
    </>
  )
}

export default App
