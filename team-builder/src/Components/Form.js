import React from 'react';

//


export default function Form(props) {
    const { value, teamMates, setTeamMates, submit } = props
    const onChange = e => {
        setTeamMates({
            ...teamMates,
            [e.target.name]:e.target.value
        })

    }

    const onSubmit = e => {
        e.preventDefault()
        submit()
    }
    


    return (
        <form onSubmit={onSubmit}>
            <label  htmlFor='nameInput'> Gimme a Name
                <input
                    onChange={onChange}
                    maxLength='10'
                    placeholder='Nick Name is fine ya?'
                    id='nameInput'
                    name='name'
                    type='text'
                    value={value.name}
                >
                </input>
            </label>
            <label htmlFor='emailInput'> And Your Email
                <input
                    onChange={onChange}
                    maxLength='20'
                    placeholder='Email'
                    id='emailInput'
                    name='email'
                    type='email'
                    value={value.email}
                >
                </input>
            </label>
            <label htmlFor='locationInput'> Last where u at
                <input
                    onChange={onChange}
                    maxLength='2'
                    placeholder='Enter State'
                    id='locationInput'
                    name='location'
                    type='text'
                    value={value.location}
                >
                </input>
            </label>
            <div>
                <h2>Add Gold Member</h2>
                <input type='submit'></input>
            </div>
        </form>

    )
}