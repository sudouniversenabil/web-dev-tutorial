import React, { useEffect } from 'react'

function Navber(color) {
    useEffect(
        () => {
            alert("the color was changed")
        }
        , [color.work])
    return (
        <div>Navber's color is chend now {color.work}</div>
    )
}

export default Navber