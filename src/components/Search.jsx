
import {useState} from 'react'

function Search({ setSearch }) {
  const [inputVal, setInputVal] = useState('');

  const submitHandle = (e) => {
    e.preventDefault();
    setSearch(prev => (
      [...prev, inputVal]
    ))
    setInputVal('')
  }

  return (
    <form onSubmit={submitHandle}>
      <input
        type="text"
        placeholder='search'
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button type='submit'>Search</button>
    </form>
  )
}

export default Search