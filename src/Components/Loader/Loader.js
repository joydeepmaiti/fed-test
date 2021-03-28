import React from "react"

import "./Loader.css"

function Loader({loading}) {

    if(!loading)
        return <React.Fragment></React.Fragment>
    return (
        <div className="loader">
            Loading...
        </div>
    )
}

export default Loader;