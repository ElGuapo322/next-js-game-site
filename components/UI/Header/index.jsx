import Link from "next/link"
import React from "react"

import { NavBar, Logo } from "./styles"

export default function Header() {
    return (
        <NavBar>
            <Link href="/" shallow={false}>
                <Logo href="">GameLab</Logo>
            </Link>
        </NavBar>
    )
}
