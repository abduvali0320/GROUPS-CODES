import React, { useContext } from 'react'
import { C } from '../Context'

export default function About() {
  // const { reduceData, dispatch } = useContext(C) 
  return (
    <div>About {reduceData.isModal ? 'rost' : "yolg`on"}  <button
      onClick={() => dispatch({ type: 'changeModal' })}
    > change State </button> </div>
  )
}
