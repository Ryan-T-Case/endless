import React from "react"

import { Button } from "../../components"
import "./index.css"

export const Banner = () => {
    const handleClickGetStarted = () => {
        // TODO: A click event would need to be added here
    }

    return (
        <div className="banner">
            <div className="banner-container text-white">
                <h2 className="top-heading">New Games &amp; Accessories</h2>
                <h1 className="main-heading">Monthly packages.</h1>
                <h1 className="main-heading">Excitement delivered daily.</h1>
                <p className="paragraph">
                    What's the best way to shop for the latest video games and
                    peripherals? How about never shooing at all? You'll get new
                    stuff on your doorstep &ndash; every month.
                </p>
                <Button label="Get Started" onClick={handleClickGetStarted} />
            </div>
        </div>
    )
}
