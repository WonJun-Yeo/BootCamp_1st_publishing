import React from 'react'

const QAndA = () => {
  return (
    <>
        <div className='head'>
            <h2>Q & A</h2>    
        </div>
        <div className='qAndAContents'>
            <div className='userInfo'>
                <img src="../../../assets/image/userDefaultProfile.png" alt="userprofile" className='userFrofile'/>
                <ul className='userDetailInfo'>
                    <li className='userName'>
                        <h4>Name</h4>
                        <span>wonjun Yeo</span>
                    </li>
                    <li className='userPhonNum'>
                        <h4>PhoneNumber</h4>
                        <span>010 9033 6644</span>
                    </li>
                    <li className='userEmail'>
                        <h4>E-mail</h4>
                        <span>rbgh004@gamil.com</span>
                    </li>
                </ul>
            </div>
            <div className='qAndAData'>
                <input type="text" placeholder='Title' />
                <textarea name="" id="" cols="30" rows="10" placeholder='Content'></textarea>
                <button type='button'>Send</button>
            </div>
        </div>
    </>
  )
}

export default QAndA