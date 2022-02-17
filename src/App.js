import React from "react"
import Home from "./Pages/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Products from "./Pages/Products"

export function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product" element={<Products />} />
                </Routes>
            </div>
        </Router>

    )
}