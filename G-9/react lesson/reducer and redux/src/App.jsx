import { useEffect, useReducer, useState } from 'react'
import './App.css'

function App() {
  const reducer = (state, action) => {
    // console.log(action);
    // return state += 1
    let { type, payload } = action
    switch (type) {
      case 'oshir': state = { ...state, son: state.son + 1 }; return state;
      case 'kamay': return state -= payload;
      case 'plus':
        return { ...state, data: state.data.map(item => item.id === payload ? { ...item, count: item.count + 1 } : item) }
      case 'changeM': return { ...state, isModal: false };
      case 'minus':
        let elem = state.data.find(c => c.id === payload)
        if (elem.count > 0) {
          return { ...state, data: state.data.map(item => item.id === payload ? { ...item, count: item.count - 1 } : item) }
        }
        else {
          window.alert('noldan kamaymaydi')
        }

      default: return state
    }
  }

  // const [data, setdata] = useState('')
  // const [filter, filterData] = useState([])
  // const [data, setdata] = useState('')
  // const [data, setdata] = useState('')

  let [reduceData, dispatch] = useReducer(reducer, {
    data: [{
      id: 1,
      count: 0,
    }, {
      id: 2,
      count: 0
    }, {
      id: 3,
      count: 0
    }, {
      id: 4,
      count: 0
    }],
    isModal: true,
    filterData: [],
  });

  return (
    <>
      <h1> {reduceData.isModal ? "rost" : 'yolg`on'}</h1>
      <button onClick={() => dispatch({ type: 'changeM' })} >  changleModal </button>
      <h1>product map</h1>
      {
        reduceData.data.map(l => {
          return <div key={l.id} >
            <button onClick={() => dispatch({ type: 'plus', payload: l.id })} > plus </button>
            {l.count}
            <button onClick={() => dispatch({ type: 'minus', payload: l.id })} > minus </button>
            <hr />
          </div>
        })
      }
      {/* <button onClick={() => dispatch({ type: "kamay", payload: 3 })} > - </button> */}
    </>
  )
}
export default App;
