import { useState } from 'react'

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)

  const resetValue = () => {
    setValue('')
  }

  const bind = {
    value,
    onChange: (e) => {
      setValue(e.target.value)
    } 
  }

  return [bind, resetValue, setValue]

}

export default useInput