import { Auth0Provider } from "@auth0/auth0-react"

import { createRoot } from 'react-dom/client'
import { App } from './App'

const root = createRoot(document.getElementById('app'))
root.render(
<Auth0Provider 
    domain="https://dev-7954hoz9.eu.auth0.com"
    clientId="kaNidIpBNzoVOBWRj5AP2uZWb0YlRYzQ"
    redirectUri={window.location.origin}>
        <App />
</Auth0Provider>)