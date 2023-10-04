import React, { useState } from 'react';
import Alert from './alert';

const Form = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState({show: false, msg:''});


  // handling of the form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === '' || password === '') {
      showAlert(true, 'Please enter all fields');
    }
    else {
      showAlert(true, 'Successfully Registered')
    }
  }

  const showAlert = (show=false, msg='')=>{
      setAlert({show, msg})
      }
  
  
  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>

      {alert.show && <Alert {...alert} removeAlert={showAlert}/>}

          <div className='reg'>
            <h2>User Registration</h2>
          </div>

          <div className='form-item'>
          <label className='label'>USERNAME:</label>
          <input type='text' className='input' value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>

        <div className='form-item'>
          <label className='label'>PASSWORD:</label>
          <input type='password' className='input' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>

        <div className='submit-container'>
          <button type='submit' className='submit' onClick={handleSubmit}>Submit</button>
        </div>
        
      </form>

    </div>

  )
}

export default Form;