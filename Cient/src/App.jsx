import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { initializeAuth } from './features/auth/authSlice'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import ProtectedRoute from './components/ProtectedRoute'

export default function App() {
    const dispatch = useDispatch()
    const { isAuthenticated } = useSelector((state) => state.auth)

    useEffect(() => {
        dispatch(initializeAuth())
    }, [dispatch])

    return (
        <Router>
            <Routes>
                <Route
                    path="/login"
                    element={
                        isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login />
                    }
                />
                <Route
                    path="/forgot-password"
                    element={
                        isAuthenticated ? <Navigate to="/dashboard" replace /> : <ForgotPassword />
                    }
                />
                <Route
                    path="/reset-password"
                    element={
                        isAuthenticated ? <Navigate to="/dashboard" replace /> : <ResetPassword />
                    }
                />
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/"
                    element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />}
                />
            </Routes>
        </Router>
    )
}
