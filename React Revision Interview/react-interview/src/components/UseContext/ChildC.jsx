import React, { useContext } from 'react'
// import { UserContext } from '../../App.jsx'
import { ThemeContext } from '../../App';

//  export  function changeTheme(theme='light', setTheme) {
//     if(theme === "light"){
//         setTheme("dark")
//     }else{
//         setTheme("light")
//     }
// }

const ChildC = () => {

    // const user = useContext(UserContext);
    const {theme, setTheme, changeTheme} = useContext(ThemeContext);

 
    
  return (
    <div>
       <h1 style={{color:theme === "light" ? "black" : "white"}}> Theme is : {theme}</h1>
      <button  onClick={changeTheme} >Change Theme</button>
     
    </div>
  )
}

export default ChildC
