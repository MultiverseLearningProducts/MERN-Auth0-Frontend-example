import { useAuth0 } from "@auth0/auth0-react"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Landing, Bookings, Menus, Profile } from './Pages'
import { ProtectRoute } from "./ProtectRoute"

export function App() {
    const { user, isAuthenticated, loginWithRedirect, logout} = useAuth0()

    return (
        <BrowserRouter>
            <nav style={{display: 'flex'}}>
                <h1>MERN Restaurants</h1>
                <Link to="/">&nbsp;Home</Link>
                <Link to="/bookings">&nbsp;Bookings</Link>
                <Link to="/menus">&nbsp;Menus</Link>
                <Link to={`/users/${isAuthenticated ? user.sub : ""}`}>Your Profile</Link>
            </nav>
            <nav>
                <button onClick={() => loginWithRedirect()}>Login</button>
                <button onClick={() => logout({returnTo: window.location.origin})}>Logout</button>
            </nav>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/bookings" element={<Bookings />} />
                <Route path="/menus" element={<Menus />} />
                <Route path="/users/:id" element={
                    <ProtectRoute isAuthenticated={isAuthenticated}>
                        <Profile />
                    </ProtectRoute>
                } />
            </Routes>
        </BrowserRouter>
    )
}