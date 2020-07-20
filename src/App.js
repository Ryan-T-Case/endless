import React from "react"
import { TopBar, Banner, HowItWorks } from "./components"

function App() {
    return (
        <div className="App">
            <div>
                <TopBar />
                <Banner />
            </div>
            <HowItWorks />
        </div>
    )
}

export default App
