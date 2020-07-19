import React, { useState, useEffect } from "react"

import { API } from "../../utils"

export const HowItWorks = () => {
    const [steps, setSteps] = useState([])

    const fetchStepsData = async () => {
        const allSteps = await API.getAllSteps()

        if (allSteps && allSteps.length) {
            setSteps(allSteps)
        }
    }

    useEffect(() => {
        fetchStepsData()
    }, [])

    return (
        <div>
            <div></div>
        </div>
    )
}
