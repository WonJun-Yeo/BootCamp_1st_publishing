import React from 'react'

const Signup = () => {
  return (
    <>
        <div className='head'>
            <h2>SignUp</h2>
        </div>
        <div>
            <ul>
                <li className='signupItem'>
                    <h3>ID</h3>
                    <input type="text" />
                    <button type='button'>Double Check</button>
                </li>
                <li className='signupItem'>
                    <h3>Password</h3>
                    <input type="text" />
                </li>
                <li className='signupItem'>
                    <h3>Confirm Password</h3>
                    <input type="text" />
                </li>
                <li className='signupItem'>
                    <h3>Name</h3>
                    <input type="text" />
                </li>
                <li className='signupItem'>
                    <h3>Phone Number</h3>
                    <input type="text" />
                </li>
                <li className='signupItem'>
                    <h3>E-mail</h3>
                    <input type="text" />
                </li>
            </ul>
        </div>
        <div>
            <button type='button'>Join</button>
            <button type='button'>Reset</button>
        </div>
    </>
  )
}

export default Signup