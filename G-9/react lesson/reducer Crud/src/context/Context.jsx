import { createContext, useReducer, useState } from "react";
import Swal from "sweetalert2";

export const MainData = createContext()

function ContextProvider({ children }) {

  const [inputValue, setInputValue] = useState({
    ism: "",
    familya: '',
    yosh: "",
    rasm: ""
  })

  const clearInputValue = () => setInputValue(({
    ism: "",
    familya: '',
    yosh: "",
    rasm: ""
  }))

  function reducer(state, { type, payload }) {
    switch (type) {
      case 'create':
        state = [...state, payload];
        return state;
      case 'remove_worker':
        state = state.filter(worker => worker.id !== payload);
        return state
      case 'edit':
        state = state.map(worker => worker.id === payload.id ? payload : worker);
        return state;
      default: return state
    }
  }

  const [works, dispatch] = useReducer(reducer, [])

  const getInputValue = (e) => {
    let { name, value } = e.target
    setInputValue({ ...inputValue, [name]: value })
  }
  const getImgPath = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: URL.createObjectURL(e.target.files[0]) })
  }

  const createWorker = (e) => {
    e.preventDefault()
    if (!inputValue.id) {
      dispatch({ type: 'create', payload: { ...inputValue, id: Date.now() } })
    }
    else {
      dispatch({ type: 'edit', payload: inputValue })
    }
    clearInputValue()
  }

  const getWorkerValue = (item) => {
    // console.log(item);
    setInputValue(item)
  }

  return (
    <MainData.Provider value={{ works, getInputValue, createWorker, inputValue, getImgPath, dispatch, getWorkerValue }}>
      {children}
    </MainData.Provider>
  )
}
export default ContextProvider