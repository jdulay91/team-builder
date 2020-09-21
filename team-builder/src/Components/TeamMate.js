import React from 'react'

export default function TeamMate(props) {
    const { teamMate } = props
    
    if (!teamMate) {
        return <h3>dunno what im doing</h3>
      }

    return (
        <div>
            <h2>{teamMate.name}</h2>
            <p>Email:{teamMate.email}</p>
            <p>State: {teamMate.location}</p>
        </div>
    )
}

