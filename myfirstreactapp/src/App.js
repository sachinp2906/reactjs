import React,{useState} from 'react'
import "./App.css"

// syntax to writing function component in react
 function App() {
  // in line 7 , 8 this is how we use useState
  const[increase,SetCounter] = useState(0)
  const[decrease,SetDecr] = useState(100)
  return (
    <div>
      {/* onClick and onChange are some of the event */}
      {/* in line 12 and 13 this is how we can take use of useState */}
      <p className='increase' onClick={()=>SetCounter(increase+1)}>This is a counter{increase}</p>
      <p className='decrease' onClick={()=>SetDecr(decrease-1)}>This is a counter{decrease}</p>
    </div>
  )
}

export default App // this is synatx to export any function or class in react
