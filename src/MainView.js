import { useAuth0 } from "@auth0/auth0-react"
import { useEffect } from "react"
import { Items } from "./Items"
import { Orders } from "./Orders"

export function MainView() {
    const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0()

    useEffect(() => {
        if(isAuthenticated) {
            console.log(user.given_name, 'logged in')
        } else {
            console.log('user logged out')
        }
    }, [user])

    const style = {
        display: 'grid',
        gridTemplateColumns: '25% 25% auto'
    }

    return (
        <section>
            <h1>MERN Restaurants</h1>
            {user ? (
                <h2>{user.name} is logged in</h2>
            ) : (
                <h2>No-one is logged in</h2>
            )}
            <button onClick={() => loginWithRedirect()}>Login</button>
            <button onClick={() => logout({returnTo: window.location.origin})}>Logout</button>
            {user ? (
                <section style={style}>
                    <Items user={user} />
                    <Orders user={user} />
                </section>
            ) : null}
        </section>
    )
}