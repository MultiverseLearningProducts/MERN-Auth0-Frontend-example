import React from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import { Auth } from "./Auth"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Landing, Bookings, Menus, Profile } from './Pages'

const navStyle = {
    display: 'flex',
    width: 'auto',
    padding: '1rem',
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'end',
    alignItems: 'center'
}

export function App() {
    const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0()
    return (        
        <BrowserRouter>
            <nav style={navStyle}>
                <h1 style={{flex: 'auto'}}>MERN Restaurants</h1>
                <Link to="/">&nbsp;Home</Link>
                <Link to="/bookings">&nbsp;Bookings</Link>
                <Link to="/menus">&nbsp;Menus</Link>
                {isAuthenticated ? (
                    <Link to={`/users/${user.sub}`}>Your Profile</Link>
                ) : null}
                <button onClick={() => loginWithRedirect()}>Login</button>
                <button onClick={() => logout({returnTo: window.location.origin})}>Logout</button>
            </nav>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/bookings" element={<Bookings />} />
                <Route path="/menus" element={<Menus />} />
                <Route path="/users/:id" element={<Auth isAuthenticated={isAuthenticated}><Profile /></Auth>} />
            </Routes>
        </BrowserRouter>
    )
}