import React, { useState, useEffect } from "react"

import { API } from "../../utils"
import "./index.css"

export const HowItWorks = () => {
    const [steps, setSteps] = useState([])

    useEffect(() => {
        API.getAllSteps().then(stepsData => {
            if (stepsData && stepsData.length) {
                setSteps(stepsData)
            }
        })
    }, [])

    return (
        <div className="how-it-works">
            <div className="card-deck">
                {steps.length &&
                    steps.map(step => <div>{step.stepNumber}</div>)}
            </div>
        </div>
    )
}
