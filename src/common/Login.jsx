import React from 'react'

const Login = () => {
  return (
    <>
        <button type='button'>X</button>
        <div>
        <ul className='loginItems'>
            <li className='loginItem'>
                <h2>ID</h2>
                <input type="text" />
            </li>
            <li className='loginItem'>
                <h2>Password</h2>
                <input type="text" />
            </li>
        </ul>
        <div className='buttonGroup'>
            <button type='button'>Login</button>
            <button type='button'>Signup</button>
        </div>

    </div>
    </>
  )
}

export default Login