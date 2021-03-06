import React, { useState, useEffect } from 'react';
import {v4 as uuid } from 'uuid'
import './App.css';
import Form from './Components/Form'
import TeamMate from './Components/TeamMate'


const initialTeamMateList = [
  {
    id: uuid(),
    name: 'Julliann',
    email: 'julliann@julliann.com',
    location: 'CA'
  },
]

const initialFormValues = {
  name:'',
  email:'',
  location:'',
}

const fakeAxiosGet = () => {
  return Promise.resolve({ status: 200, success: true, data:initialTeamMateList })
}


function App() {

  const[teamMates, setTeamMates] = useState([])
  const[formValues, setFormValues]= useState(initialFormValues)

  const updateForm =(inputName,InputValue) =>{
    const updatedFormValues = {...formValues,[inputName]:InputValue}
    setFormValues(updatedFormValues)
  }

  const submitForm =() => {
    
    const newTeamMate = {
      name:formValues.name.trim(),
      email: formValues.email.trim(),
      location: formValues.location.trim(),
    }
    const newTeamMates= [...teamMates]
    newTeamMates.push(newTeamMate)
    setTeamMates(newTeamMates)
    setFormValues(initialFormValues)

  }

  useEffect(() => {
    fakeAxiosGet('fakeapi.com').then(res=>setTeamMates(res.data))
  },[])

  return ( 
    <div>
      <Form values={formValues} update={updateForm} submit={submitForm}/>
      

      {teamMates.map(teamMate=>{
        return(
          <TeamMate key={teamMate.id} teamMate={teamMate}/>
        )
      })}
    </div>
  )
}
export default App;
