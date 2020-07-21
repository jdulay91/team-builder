import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import TeamMate from './Components/TeamMate'

const ogMembers = [{
  name: 'Juli',
  email: 'juli@juli.com',
  location: 'CA'
}]

const initialFormValues = {
  name: '',
  email: '',
  location: '',
}

const fakeAxiosGet = () => {
  return Promise.resolve({ status: 200, success: true, data: ogMembers })
}
const fakeAxiosPost = (url, { name, email, location }) => {
  const newFriend = { name, email, location }
  return Promise.resolve({ status: 200, success: true, data: newFriend })
}
function App() {
  const [teamMates, setTeamMates] = useState(ogMembers)
  const [formValues,setFormValues] = useState(initialFormValues)
  const submitForm = () => {

    const newFriend = {
      name: teamMates.name.trim(),
      email: teamMates.email.trim(),
      location: teamMates.location.trim(),
    }

    if (!newFriend.username || !newFriend.email || !newFriend.role) return

    fakeAxiosPost('fakeapi.com', newFriend)
      .then(res => {

        const friendFromAPI = res.data
        setTeamMates([friendFromAPI, ...teamMates])

        setFormValues(initialFormValues)
      })
  }



  return (
    <div>
      <Form submit={submitForm} value={initialFormValues} setTeamMates={setTeamMates} teamMates={teamMates} />
      {ogMembers.map(member => {
        return (<TeamMate info={member} />)
      })}

    </div>

  );
}

export default App;
