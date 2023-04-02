import React from 'react'

function NavBar() {
    return (
        <div className=' py-10 px-10 flex items-center justify-between'>
            <h1 className=' font-bold text-2xl'>Emoji's 😄</h1>
            <ul className=' flex space-x-2'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Extention</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </div>
    )
}

export default NavBar