import React from "react"
import { EndlessLogo } from "../../components"
import { Colors } from "../../utils"

import "./index.css"

export const TopBar = ({ backGroundColor = Colors.secondary }) => {
    const getTopBarColorClassName = () => {
        switch (backGroundColor) {
            case Colors.primary:
                return "bg-primary"
            case Colors.offWhite:
                return "bg-offWhite"

            default:
                return "bg-secondary"
        }
    }

    return (
        <nav className={`top-bar ${getTopBarColorClassName()}`}>
            <span className="offset-logo">
                <EndlessLogo width="300" height="24" />
            </span>
        </nav>
    )
}
