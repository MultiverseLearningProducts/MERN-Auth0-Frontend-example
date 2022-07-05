import { Navigate, useLocation } from "react-router-dom";

export function ProtectRoute(props) {
    const location = useLocation()

    if (!props.isAuthenticated) {
        return <Navigate to="/" state={{from: location}} replace />
    }

    return props.children
}