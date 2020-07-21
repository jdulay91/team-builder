import React from 'react'


export default function TeamMate(props) {
    const { info } = props
    return (
        <div>
            <h2>{info.name}</h2>
            <p>Email:{info.email}</p>
            <p>State:{info.location}</p>
        </div>)
}