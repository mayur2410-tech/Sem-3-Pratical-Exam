// import React from 'react'
// import {useState} from 'react'
// import {useEffect} from 'react'
// // const App = () => {
// // const [ count, setCount ] = useState(0);
// // const [ message, setMessage ] = useState("")
// // const[counter,setCounter]=useState(0)

// // // useEffect(()=>{
// // // StartCount()
// // // },[count])

// // function StartCount(){
// //   let m = setInterval(()=>{
// // setCount((prev)=>{
// //   if(prev<=1){
// //   clearInterval(m)
// //   setMessage("Time is Up")
// //   return 0;
// // }
// // return prev -1;
// // })
// //   },1000)
// // }



// //   return (
// //     <div>
// //       <label>Input any number </label>
// //       <input type = "number"
// //       onChange={(e)=>{setMessage("");setCount(e.target.value)}}
// //       />
// //       <span>   </span>
// //       <button onClick={StartCount}>Start Count</button>
// //       <h1>{count}</h1>
// //       <br />
// //       <h2>{message}</h2>
// //       <h2>{counter}</h2>
// //       <button onClick={()=>setCounter(counter + 1)}>Increment count</button>
// //     </div>
// //   )
// // }

// // export default App


// function App() {
//   const[count,setCount]=useState(0);
//   const[message,setMessage]=useState("")
//   const[running,setRunning]=useState(false)
//   const[counter,setCounter]=useState(0)

//   function start(){
//     setRunning(true)
//     setMessage("")
//   }

//   useEffect(()=>{
//     console.log("useeffect runs")
//     if(!running) return ;

//     if(count<=0){
//       setMessage("Time is Up")
//       setRunning(false)
//       return ;
//     }
//     const time = setTimeout(()=>{
//       setCount(count - 1)
//     }, 1000)

//     return () => clearTimeout(time);
//   }, [count, running])

//   return (
//     <>
//     <input type = "number"
//     onChange={(e)=>{setCount(e.target.value);setMessage("")}}
//     />
//     <button onClick={start}>Start Time</button>
//     <h1>{count}</h1>
//     <h2>{message}</h2>


//     <h3>{counter}</h3>
//     <button onClick={() => setCounter(counter + 1)}>Increment</button>
//     </>
//   )
// }
// export default App

// import React, { createContext, useState } from 'react'
// import ChildA from './components/UseContext/ChildA.jsx'
// // import { useContext,createContext } from 'react'
// // import { useState } from 'react'

// const ThemeContext = createContext();
// // const UserContext = createContext()
// const App = () => {
  
// // const [user,setUser] = useState({name:"mayur"})
// const [theme,setTheme] = useState("light")
//  function changeTheme() {
//     setTheme(prev => (prev === "light" ? "dark" : "light"));
//   }
//   return (
//     // <UserContext.Provider value={user}>
//     // <ChildA />
//     // </UserContext.Provider>
//     <ThemeContext.Provider value={{theme, setTheme,changeTheme}}>
//           <div style={{backgroundColor: theme === "light" ? "red" : "black", height:"90vh"}}>


//       <ChildA />
//       </div>
//     </ThemeContext.Provider>
    
//   )
// }

// // export {UserContext}
// export default App
// // export {UserContext}
// export {ThemeContext}

import React from 'react'
import UseMemo from './components/UseMemo/UseMemo'
const App = () => {
  return (
    <div>
      <UseMemo />
    </div>
  )
}

export default App
