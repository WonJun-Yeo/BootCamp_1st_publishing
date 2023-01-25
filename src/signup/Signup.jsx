import React from 'react'

const Signup = () => {
  return (
    <>
        <div className='head'>
            <h2>SignUp</h2>
        </div>
        <div className='dataWraper'>
            <ul className='signupInfo'>
                <li>
                    <p>ID</p>
                    <input type="text" />
                    <button type='button'>Double Check</button>
                </li>
                <li>
                    <p>Password</p>
                    <input type="text" />
                </li>
                <li>
                    <p>Confirm Password</p>
                    <input type="text" />
                </li>
                <li>
                    <p>Name</p>
                    <input type="text" />
                </li>
                <li>
                    <p>Phone Number</p>
                    <input type="text" />
                </li>
                <li>
                    <p>E-Mail</p>
                    <input type="text" />
                </li>
            </ul>
            <div className='signupBtGroup'>
                <button type='button'>Join</button>
                <button type='button'>Reset</button>
            </div>
        </div>
        
    </>
  )
}

export default Signup