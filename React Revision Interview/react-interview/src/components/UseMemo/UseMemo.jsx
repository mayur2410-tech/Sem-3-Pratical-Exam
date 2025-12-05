import React, { useState,useMemo } from 'react'

const UseMemo = () => {

    const[count,setCount]=useState(0);
    const[num,setNum]=useState(5);

    // console.time()
    function expesive(num){
        console.log("expensive function called");
        for(let i=0;i<1000000000;i++){ 
            
        }
        return num*2;
    }
// console.timeEnd()
    let double = useMemo(() => expesive(num), [num])   
    // let double = expesive(num);

    function increment(){
        setCount(count + 1);
    }

    
  return (
    <div>
        <h1>Count :{count}</h1>
      <button onClick={increment}>Increment</button>
      <br />
      <br />
      <br />
      <input type="number" value={num} onChange={(e)=>setNum(e.target.value)} />
      <h1>Double:{double}</h1>
    </div>
  )
}

export default UseMemo
