import React from 'react'

const Header = () => {
  return (
    <header>
      <div className='headerTop'>
        <div className='logo'>
          <img src="" alt="homeImage" />
        </div>
        <h1 className='title'>
          Title
        </h1>
        <div className='buttonGroup'>
          <button type='button'>LogIn</button>
          <button type='button'>SignUp</button>
        </div>
      </div>
      <div className='navBar'>
        <ul>
          <li>FreeBoard</li>
          <li>Notice & Event</li>
          <li>FAQ</li>
          <li>Q&A</li>
        </ul>
      </div>
    </header>
  )
}

export default Header