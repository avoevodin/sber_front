import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { usePhonesContext } from '../Phones'

// const isMount = false

const SearchPhoneForm = () => {
  const [searchInput, setSearchInput] = useState('')
  const { updatePhones } = usePhonesContext()
  const [searchParams, setSearchParams] = useSearchParams()

  const isMount = useRef(false)

  useEffect(() => {
    const parsedQuery = JSON.parse(searchParams.get('filter'))
    if (parsedQuery && parsedQuery.search) {
      setSearchInput(parsedQuery.search)
    }
  }, [])

  useEffect(() => {
    if (isMount.current) {
      const filter = {
        search: searchInput,
      }
      const preparedFilterForURL = encodeURIComponent(JSON.stringify(filter))
      const query = `?filter=${preparedFilterForURL}`
      setSearchParams(query)

      fetch(`http://localhost:3000/api/v1/phones/${query}`)
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
