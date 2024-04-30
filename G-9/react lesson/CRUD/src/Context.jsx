import { createContext, useReducer, useState } from "react";

export const ContextData = createContext()
function ContextProvider({ children }) {

  const reducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
      case 'create':
        return [...state, { ...payload, id: Date.now() }];
      case 'delete': return state.filter(c => c.id !== payload);
      case 'edit': return state.map(c => c.id === payload.id ? payload : c);
      default: return state
    }
  }
  const [data, dispatch] = useReducer(reducer, [])
  const [inputValue, setInputValue] = useState({
    firstName: '',
    lastName: '',
    age: '',
    job: '',
    live: ''
  })

  const getInputValue = (e) => {
    const { name, value } = e.target
    setInputValue({
      ...inputValue,
      [name]: value
    })
  }
  const clearInputValue = () => {
    setInputValue({
      firstName: '',
      lastName: '',
      age: '',
      job: '',
      live: ''
    })
  }
  const handleEdit = function (prop) {
    setInputValue(prop)
  }
  return (
    <ContextData.Provider value={{ dispatch, data, getInputValue, inputValue, clearInputValue, handleEdit }} >
      {children}
    </ContextData.Provider>
  )
}

export default ContextProvider