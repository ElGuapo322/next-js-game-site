import React from "react"

import { OriginalSelect, Wrapper, WrapperContent } from "./styles"

export default function Index(props) {
    return (
        <div>
            <OriginalSelect onChange={props.onChange} value={props.value} name={props.name}>
                <option value="">Select option</option>
                {props.options &&
                    props.options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
            </OriginalSelect>
            <Wrapper>
                <WrapperContent>
                    <div className="wrapper-text">
                        {props.placeholder && (!props.value || props.value === "cancel") && props.placeholder}
                    </div>
                    <div className="wrapper-text">
                        {props.options?.map((option) => option.value == props.value && option.label)}
                    </div>
                </WrapperContent>
                <div>&#9662;</div>
            </Wrapper>
        </div>
    )
}
