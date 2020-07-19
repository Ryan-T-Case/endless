import React, { useState, useEffect } from "react"

import { API } from "../../utils"

export const HowItWorks = () => {
    const [steps, setSteps] = useState([])

    useEffect(async () => {
        const allSteps = await API.getAllSteps()

        if (allSteps && allSteps.length) {
            setSteps(allSteps)
        }
    }, [])

    return (
        <div>
            <div></div>
        </div>
    )
}
