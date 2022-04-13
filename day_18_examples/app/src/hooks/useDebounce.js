import { useEffect, useState } from 'react'

const useDebounce = (value, ms = 0) => {
  const [debouncedState, setDebuncedState] = useState(value)

  useEffect(() => {
    const id = setTimeout(() => {
      setDebuncedState(value)
    }, ms)

    return () => clearTimeout(id)
  }, [value])

  return debouncedState
}

export default useDebounce
