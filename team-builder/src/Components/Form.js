import React from 'react'

export default function Form(props) {
    const { values, update, submit } = props

    const onChange = e => {
       const{name,value} = e.target
        update(name, value)
    }

    const onSubmit = e => {
        e.preventDefault()
        submit()
    }

    return (
        <form onSubmit={onSubmit}>
            <h2>New Hire</h2>
            <button disabled={!values.name || !values.email || !values.location}>submit</button>
            <label htmlFor="nameInput"> Name
                <input 
                id='nameInput'
                name='name'
                type='text'
                placeholder='Enter your name'
                maxLength='20'
                value={values.name}
                onChange={onChange}
                />
            </label>
            <label htmlFor='emailInput'> Email
                <input
                id='emailInput'
                name='email'
                type='email'
                placeholder='enter ur email'
                maxLength='30'
                value={values.email}
                onChange={onChange}                
                />
            </label>
            <label htmlFor='locationInput'> Location
                <input
                id='locationInput'
                name='location'
                type='text'
                placeholder='enter state'
                maxLength='2'
                value={values.location}
                onChange={onChange} />
            </label>
        </form>
    )
}