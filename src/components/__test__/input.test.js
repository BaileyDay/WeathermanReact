import React from 'react';
import ReactDOM from 'react-dom';
import Input from '../locationInput'
import { render } from '@testing-library/react'
import "@testing-library/jest-dom"

it("Renders without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(<Input />, div)
})

