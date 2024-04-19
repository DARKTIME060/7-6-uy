import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const {count} = useSelector((state)=>state.counter)
  const dispatch = useDispatch()
  return (
    <div className='counter'>
      <button className="counter__clear" onClick={()=>dispatch({type:"clear"})}>clear</button>
      <button className="counter__plus10" onClick={()=>dispatch({type:"plus10"})}>+10</button>
      <button className="counter__plus" onClick={()=>dispatch({type:"plus"})}>+1</button>
      <p className="counter__number">{count}</p>
      <button className="counter__minus" onClick={()=>dispatch({type:"minus"})}>-1</button>
      <button className="counter__minus10" onClick={()=>dispatch({type:"minus10"})}>-10</button>
      <button className="counter__stop" onClick={()=>dispatch({type:"stop"})}>stop</button>
    </div>
  )
}

export default App 