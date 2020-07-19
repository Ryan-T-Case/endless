import React, { useState, useEffect } from "react"

import { API } from "../../utils"

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
        <div>
            <div></div>
        </div>
    )
}
