import React, { useState, useEffect } from "react"

import { API, StepUtils } from "../../utils"
import { StepCard } from "../../components"
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
            <h2 className="title">How It Works</h2>
            <div className="card-deck">
                {steps.length &&
                    steps.map(step => {
                        const latestVersionData = StepUtils.getLatestVersionContent(
                            step
                        )

                        return (
                            <StepCard
                                key={step.id}
                                stepNumber={step.stepNumber}
                                title={latestVersionData.title}
                                body={latestVersionData.body}
                            />
                        )
                    })}
            </div>
        </div>
    )
}
