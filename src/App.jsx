import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import LandingPage from './Landing'
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Signup page first */}
                <Route path="/" element={<Signup />} />
                
                {/* Login page */}
                <Route path="/login" element={<Login />} />
                
                {/* Landing page after login */}
                <Route path="/landing" element={<LandingPage />} />
                
                {/* Redirect any unknown routes to signup */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
