import { useEffect, useRef, useState } from 'react'
import { usePhonesContext } from '../Phones'

// const isMount = false

const SearchPhoneForm = () => {
  const [searchInput, setSearchInput] = useState('')
  const { updatePhones } = usePhonesContext()
  const isMount = useRef(false)

  useEffect(() => {
    if (isMount.current) {
      const filter = {
        search: searchInput,
      }
      const preparedFilterForURL = encodeURIComponent(JSON.stringify(filter))
      fetch(`http://localhost:3000/api/v1/phones/?filter=${preparedFilterForURL}`)
        .then((response) => response.json())
        .then((dataFromServer) => updatePhones(dataFromServer))
    } else {
      isMount.current = true
    }
  }, [searchInput])

  const changeHandler = (e) => {
    setSearchInput(e.target.value)
  }

  return (
    <form className="d-flex flex-column align-items-center">
      <div className="mb-3">
        <input
          name="name"
          placeholder="name"
          type="text"
          className="form-control"
          value={searchInput}
          onChange={changeHandler}
        />
      </div>
    </form>
  )
}

export default SearchPhoneForm
