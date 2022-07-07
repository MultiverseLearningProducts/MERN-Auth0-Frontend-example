import React from 'react'
import { Navigate, useLocation } from "react-router-dom"

export function Auth({isAuthenticated, children}) {
    const location = useLocation()
    if(isAuthenticated) {
        return children
    } else {
        return <Navigate to="/" state={{from: location}} replace />
    }
}