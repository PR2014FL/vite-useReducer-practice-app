import React, { useReducer } from 'react'//1. add useReducer
import './App.css'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//2. Make my reducer that aligns with initial state
const reducer = (state, action) => {
  //This is where the switch statement goes. Think of think as the 'playbook'or 'SOP'
 switch (action.type) {
  case "ANGRY":
    return{
      emotion: "Angry.",
      emoji: "😠",
      toggleText: state.toggleText
    }
    
  case "ANGRIER":
    return{
      emotion: "Angrier!",
      emoji: "😤",
      toggleText: state.toggleText
    }

    case "ANGRIEST":
    return{
      emotion: "at my Angriest!",
      emoji: "🤬",
      toggleText: state.toggleText
    }

    case "SORRY":
      return{
        emotion: "Better",
        emoji: "😌",
        toggleText: state.toggleText
      }

      case "RESET":
      return{
        emotion: "Good.",
        emoji: "😊",
        toggleText: true
      }
  
  case "toggleText":
    return{
      emotion:state.emotion,
      emoji:state.emoji,
      toggleText: !state.toggleText
    }
  default:
    return state
 }
}

function App() {
  // const [count, setCount] = useState(0)
const[state, dispatch] = useReducer(reducer, {
  emotion: "Good.",
  emoji: "😊",
  toggleText: true
})
// connects the reducer function to the dispatch action

  return (
    <>
    <div> 

      
<h1>Happiness Scale</h1>
<h2>I am feeling {state.emotion}</h2>
<div className="btnContainer">
  <button style={{margin: "10px"}} onClick={() => {dispatch({type: "ANGRY"})}}> Angry </button>
  <button style={{margin: "10px"}} onClick={() => {dispatch({type: "ANGRIER"})}}> Angrier </button>
  <button style={{margin: "10px"}} onClick={() => {dispatch({type: "ANGRIEST"})}}> Angriest </button><hr/>
  <button style={{margin: "10px"}} onClick={() => {dispatch({type: "SORRY"})}}> You Say "I'm Sorry" </button>
  <button style={{margin: "10px"}} onClick={() => {dispatch({type: "toggleText"})}}>{state.toggleText ? "Hide" : "UnHide"} </button>
  <div className="emoji">{state.toggleText && <p>{state.emoji}</p>}</div>
  <button style={{margin: "10px"}} onClick={() => {dispatch({type: "RESET"})}}> Reset </button>
</div>


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
