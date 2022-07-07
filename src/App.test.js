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