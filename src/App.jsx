import React, { useReducer } from 'react'//1. add useReducer
import './App.css'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//2. Make my reducer that aligns with initial state
const reducer = (state, action) => {
  //This is where the switch statement goes. Think of think as the 'playbook'or 'SOP'
 switch (action.type) {
  case "INCREMENT":
    return{
      count: state.count +1,
      toggleText: state.toggleText
    }
    break;
  case "DECREMENT":
    return{
      count: state.count -1,
      toggleText: state.toggleText
    }
  break;
  case "toggleText":
    return{
      count: state.count,
      toggleText: !state.toggleText
    }
  default:
    return state
 }
}

function App() {
  // const [count, setCount] = useState(0)



const[count, dispatch] = useReducer(reducer, {
  count: 0,
  toggleText: true
})
// connects the reducer function to the dispatch action

  return (
    <>
    <div> 

      
<h1>Counter Application</h1>
<div className="btnContainer">
  <button onClick={() => {dispatch({type: "DECREMENT"})}}> - </button>
  <button onClick={() => {dispatch({type: "INCREMENT"})}}> + </button>
</div>
<h2>Current Count: {count.count}</h2>


    </div>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
