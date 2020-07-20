import React, { useState, useEffect } from "react"

import { API, StepUtils } from "../../utils"
import "./index.css"

export const HowItWorks = () => {
    const [steps, setSteps] = useState([])

    useEffect(() => {
        API.getAllSteps().then(stepsData => {
            if (stepsData && stepsData.length) {
                const unsortedSteps = stepsData
                const sortedSteps = StepUtils.sortStepsByStepNumber(
                    unsortedSteps
                )
                setSteps(sortedSteps)
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
