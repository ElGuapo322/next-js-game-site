import React from "react"

import { GlobalStyle } from "./styles"

export default function GlobalLayout({ children }) {
    return (
        <>
            <GlobalStyle />
            {children}
        </>
    )
}
