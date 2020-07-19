import React from "react"

export const StepCard = ({ stepNumber, title, body }) => {
    const getFormattedStepNumber = () => {
        return `0${stepNumber}`
    }

    const getUpperCaseTitle = () => {
        return title.toUpperCase()
    }

    return (
        <div className="step-card">
            <div className="step-number">{getFormattedStepNumber()}</div>
            <h2 className="step-title">{getUpperCaseTitle()}</h2>
            <p className="step-body">{body}</p>
        </div>
    )
}
