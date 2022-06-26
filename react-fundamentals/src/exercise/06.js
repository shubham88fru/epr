import * as React from 'react'
import {useState} from 'react'
import {useRef} from 'react'

function UsernameForm({onSubmitUsername}) {
  const nameRef = useRef(null)
  const [error, setError] = useState('')
  const [input, setInput] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    //const ip = e.target[0].value --> // get value from event object
    const ip = nameRef.current.value //get value using ref
    onSubmitUsername(ip)
  }

  function handleInputChange(e) {
    const ip = e.target.value

    // const isValid = ip === ip.toLowerCase()
    // setError(isValid ? null : 'Input should be all lowercase')

    setInput(ip.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          onChange={handleInputChange}
          value={input}
          ref={nameRef}
          type="text"
        />
      </div>
      <button disabled={error} type="submit">
        Submit
      </button>
      <p>{error}</p>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
