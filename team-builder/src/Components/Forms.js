import React from 'react'

const Forms = props => {
    console.log(props)

    return (
        <div>
            {props.userData.map(user => {
                console.log(user)
                return (
                    <div className='user' key={user.id}>
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                        <p>{user.body}</p>
                        <p>{user.role}</p>
                    </div>
                )
            })}
        </div>
    );
}
export default Forms;