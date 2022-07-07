# MERN with Auth0

This example project uses the MERN stack:

* MongoDB
* Express
* React
* NodeJS

We set up client-side auth using a 3rd party service called Auth0.

## Testing

You will need to add these dependencies

```
npm i --save-dev react-test-renderer jest-environment-jsdom jest-css-modules-transform babel-jest @babel/preset-env @babel/preset-react @testing-library/jest-dom @testing-library/react
```

And add this config to your `package.json`

```json
{
  "jest": {
    "moduleNameMapper": {
      "^/(.*)$": "<rootDir>/src/$1"
    },
    "verbose": true,
    "transform": {
      "^.+\\.js$": "babel-jest",
      ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform"
    },
    "globals": {
      "NODE_ENV": "test"
    },
    "moduleFileExtensions": [
      "js",
      "jsx"
    ],
    "moduleDirectories": [
      "node_modules"
    ]
  }
}
```

An example test file. Label your test files with this extension `*.test.js` where the * is your file name.

```js
/**
 * @jest-environment jsdom
 */

import React from 'react'
import { App } from './App'
const ReactTestRenderer = require('react-test-renderer')
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

describe("<App />", () => {
    test("The react tree", () => {
        const rendered = ReactTestRenderer.create(<App />)
        const appComponent = rendered.toJSON()
        expect(appComponent.length).toBe(2)
    })

    test("User is logged out", () => {
        render(<App />)
        expect(screen.getByText('MERN Restaurants')).toHaveTextContent('MERN Restaurants')
        expect(() => screen.getByDisplayValue('Your Profile')).toThrowError()
    })
})
```
At the top of the file we import React and our component we are testing. You can use the lower level `ReactTestRenderer` to create a json object that will have the whole tree of your component so you can verify the structure of the app is sound.

The second test uses a higher level library that is a wrapper for some lower level functions in `react-test-renderer`. This library lets us render and query our components.

[https://testing-library.com/docs/](https://testing-library.com/docs/)