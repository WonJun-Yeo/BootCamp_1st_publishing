import React from 'react'

const QAndAView = () => {
  return (
    <div>
        <div className='head'>
            <h2>Q & A</h2>
        </div>
        <div className='qAndAContentBox'>
            <div>
                <img src="" alt="userProfile" />
                <ul>
                    <li className='userProfileItem'>
                        <h4>Name</h4>
                        <span>WonJub.Yeo</span>
                    </li>
                    <li className='userProfileItem'>
                        <h4>Phone Number</h4>
                        <span>01011112222</span>
                    </li>
                    <li className='userProfileItem'>
                        <h4>E-mail</h4>
                        <span>rbgh004@naver.com</span>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <h4>Title</h4>
                        <input type="text" />
                    </li>
                    <li>
                        <h4>Content</h4>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </li>
                    <li><button type='button'>Send</button></li>
                </ul>
            </div>


        </div>

    </div>
  )
}

export default QAndAView