import React, { useState } from 'react'


const FormFields = props => {
    //onChange function, takes the EVENT object
    // const logName = event => {
    //     console.log(event.target.value)
    //     setForm({...form, name: event.target.value})
    // }
    console.log(props)
    const [form, setForm] = useState({name: "", email: "", text: ""})

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    
    const submitForm = event => {
        event.preventDefault();
        const newUser = {
            // ...users, NOT DEFINED ?
            id: Date.now()
        };
        props.addNewUser(newUser)
    }
    return (
        <form onSubmit={submitForm}> 
            <label htmlFor='name' hidden>Name:</label>
            <input 
                type='text'  
                name='name' 
                placeholder='Name'
                value={form.name} 
                onChange={changeHandler} 
            />
            <br />

            <label htmlFor='email' hidden>Email:</label>
            <input 
                type='text' 
                name='email' 
                placeholder='Email'
                value={form.email} 
                onChange={changeHandler}  
            />
            <br />

            <label htmlFor='role' hidden>Drop Down</label> 
            <select name='role' value=''>
                <option value='open'></option>
                <option value='frontend'>Frontend Engineer</option>
                <option value='backend'>Backend Engineer</option>
                <option value='designer'>Designer</option>
                <option value='data'>Data Scientist</option>
            </select>
            <br />

            <label htmlFor='body' hidden>Note Area</label>
            <textarea 
                name='body' 
                placeholder='witty note here' 
                value={form.text}
                onChange={changeHandler}
            />
            <br />

            <button type='submit'>Join Team!</button>
        </form>
    )
}
export default FormFields;