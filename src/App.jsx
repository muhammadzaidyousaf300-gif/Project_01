import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './Login.jsx'
import Signup from './signup.jsx'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Show signup first */}
                <Route path="/" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            
        </BrowserRouter>
    )
}

export default App
