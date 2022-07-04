import { Auth0Provider } from "@auth0/auth0-react"
import { MainView } from "./MainView"
export function App() {
    return (
        <Auth0Provider 
            domain="https://dev-7954hoz9.eu.auth0.com"
            clientId="kaNidIpBNzoVOBWRj5AP2uZWb0YlRYzQ"
            redirectUri={window.location.origin}>
            <MainView />
        </Auth0Provider>
    )
}