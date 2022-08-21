import React from "react"

import { Input } from "./styles"

export default function index(props) {
    return <Input value={props.value} name={props.name} onChange={props.onChange} placeholder="Search by name" />
}
