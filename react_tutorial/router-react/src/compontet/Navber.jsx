import React from 'react'
import { Link } from 'react-router-dom'

function Navber() {
    return (
        <>
            <nav>

                <Link to="/loging"><li>Contant</li></Link>
                <Link to="/"><li>Home</li></Link>
                <Link to="/"><li>list</li></Link>
                
            </nav>

        </>
    )
}

export default Navber