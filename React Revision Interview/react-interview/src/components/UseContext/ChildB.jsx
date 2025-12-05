import React from 'react'
import ChildC from './ChildC'
import { useContext } from 'react'
import { ThemeContext } from '../../App'
const ChildB = () => {
    const {changeTheme} = useContext(ThemeContext);
  return (
    <div>
    <button onClick={changeTheme}> child b button</button>
      <ChildC />
    </div>
  )
}

export default ChildB
