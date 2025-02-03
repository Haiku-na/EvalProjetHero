import React from "react";

export default function Introduction(props) {
    return (
        <>
        <div className="introduction">
            <h3>{props.description}</h3>
        </div>
        </>
    );
}
