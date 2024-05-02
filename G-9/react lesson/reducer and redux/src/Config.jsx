import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default function Config() {
  let dispatch = useDispatch()

  const getUsers = async () => {
    dispatch({ type: "loading", payload: true })
    try {
      let response = await axios('http://localhost:3000/users')
      dispatch({ type: "getUser", payload: response.data })
    } catch (error) {
      console.log(error);
    }
    finally {
      dispatch({ type: "loading", payload: false })
    }

  }
  useEffect(() => {
    getUsers()
  }, [])

}
