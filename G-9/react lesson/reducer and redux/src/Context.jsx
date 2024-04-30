import { createContext, useReducer } from "react";

export const C = createContext()

function DataContext({ children }) {
  const reducer = (state, action) => {
    // console.log(action);
    // return state += 1
    let { type, payload } = action
    switch (type) {
      case 'increment':
        state = { ...state, data: state.data.map(i => i.id === payload ? { ...i, count: i.count + 1 } : i) }
        return state
      case 'decrement':
        return { ...state, data: state.data.map(i => i.id === payload ? { ...i, count: i.count - 1 } : i) }
      case 'changeModal': return { ...state, isModal: !state.isModal }
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
    <C.Provider value={{ dispatch, reduceData }}>
      {children}
    </C.Provider>
  )
}
export default DataContext