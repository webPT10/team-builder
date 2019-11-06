import React from 'react'

const Forms = props => {
    console.log(props)

    return (
        <div>
            {props.userData.map(item => {
                console.log(item)
                return (
                    <div className='user' key={item.id}>
                        <h2>{item.name}</h2>
                        <p>{item.email}</p>
                        <p>{item.body}</p>
                    </div>
                )
            })}
        </div>
    );
}
export default Forms;