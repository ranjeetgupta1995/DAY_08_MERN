import React, { useRef, useState } from 'react'

const UserForm = () => {
    const [name, setName] = useState('');
    const emailRef = useRef(null);
    const [errorValidation, setErrorValidation] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
        if(e.target.value.length < 3){
            setErrorValidation("Name must be at least 3 characters long.")
        }else{
            setErrorValidation('')
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailValue  = emailRef.current.value;

        console.log("Name - ", name);
        console.log("Email - ", emailValue);
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name : 
            <input type='text' value={name} onChange={handleNameChange} />
        </label>
        <br />
        <br />
        <label>Email : 
            <input type='email' ref={emailRef} />
        </label>
        <br />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default UserForm;
