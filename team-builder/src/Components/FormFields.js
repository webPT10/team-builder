import React, { useState } from 'react'


const FormFields = props => {

    return (
        <form> 
            <label htmlFor='name' hidden>Name:</label>
            <input type='text' name='name' placeholder='Name'/>
            <br />
            <label htmlFor='email' hidden>Email:</label>
            <input type='text' name='email' placeholder='Email'/>
        </form>
    )
}
export default FormFields;