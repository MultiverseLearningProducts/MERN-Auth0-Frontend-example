import React from 'react'
import { useParams, useNavigate } from "react-router-dom"

export function Menus() {
    return (
        <section>
            <h1>Menus page</h1>
        </section>
    )
}
export function Bookings() {
    const navigate = useNavigate()

    return (
        <section>
            <h1>Bookings page</h1>
            <button onClick={() => navigate("/", {replace: true})}>back</button>
        </section>
    )
}
export function Landing() {
    return (
        <section>
            <h1>Landing page</h1>
        </section>
    )
}
export function Profile() {
    const {id} = useParams()
    return (
        <section>
            <h1>User with id of {id}</h1>
        </section>
    )

}