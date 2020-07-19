import React from "react"

import "./index.css"

export const Button = ({ label, onClick }) => {
    const labelToUpperCase = () => {
        return label.toUpperCase()
    }

    return (
        <button className="button-primary" onClick={onClick}>
            {labelToUpperCase()}
        </button>
    )
}
