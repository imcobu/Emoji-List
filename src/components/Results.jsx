import React from 'react'
import Emojis from './Emojis'

function Results() {

    const Result = Emojis.map(
        (emoji, key) =>
            <li className=' space-x-2 flex items-center my-2'>
                <h1 className=' text-2xl'>{emoji}</h1>
            </li>
    )

    return (
        <div className='flex justify-center my-10'>
            <div className=' w-72 h-96 bg rounded-2xl overflow-y-scroll scroll p-10'>
                <h1 className=''>Copy & Paste</h1>
                <ul>{Result}</ul>
            </div>
        </div>
    )
}

export default Results