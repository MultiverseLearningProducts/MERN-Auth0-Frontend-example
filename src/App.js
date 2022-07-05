import { Auth0Provider } from "@auth0/auth0-react"
import { MainView } from "./MainView"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Landing, Bookings, Menus, Profile } from './Pages'

const someUserId = 1234567

export function App() {
    return (
        <Auth0Provider 
            domain="https://dev-7954hoz9.eu.auth0.com"
            clientId="kaNidIpBNzoVOBWRj5AP2uZWb0YlRYzQ"
            redirectUri={window.location.origin}>
            <BrowserRouter>
                <nav style={{display: 'flex'}}>
                    <h1>MERN Restaurants</h1>
                    <Link to="/">&nbsp;Home</Link>
                    <Link to="/bookings">&nbsp;Bookings</Link>
                    <Link to="/menus">&nbsp;Menus</Link>
                    <Link to={`/users/${someUserId}`}>Your Profile</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/bookings" element={<Bookings />} />
                    <Route path="/menus" element={<Menus />} />
                    <Route path="/users/:id" element={<Profile />} />
                </Routes>
            </BrowserRouter>
        </Auth0Provider>
    )
}