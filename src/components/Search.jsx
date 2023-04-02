import React, { useState } from 'react'
import Results from './Results'

function Search() {
    const [query, setQuery] = useState("")
    const textInput = (event) => {
        setQuery(event.target.value)
    }
    return (
        <div>
            <input
                type="text"
                className=' w-72 h-10 rounded-lg p-5 outline-none'
                placeholder='Search Emoji'
                onChange={textInput}
            />
            <Results />
        </div>
    )
}

export default Search