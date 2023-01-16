import React from 'react'
import Pagenation from '../common/Pagenation'

const NoticeContainer = () => {
  return (
    <>
     <div className='head'>
        <h2>Notice & Event</h2>    
    </div>
    <div className='filter'>
        <button type='button'>All</button>
        <button type='button'>Noice</button>
        <button type='button'>Event</button>
    </div>
    <ul className='noticeItems'>
        <li className="noticeItem">
            <img src="" alt="noticeItem" />
            <h3 className='noticeItemTitle'>Title</h3>
        </li>
        <li className="noticeItem">
            <img src="" alt="noticeItem" />
            <h3 className='noticeItemTitle'>Title</h3>
        </li>
        <li className="noticeItem">
            <img src="" alt="noticeItem" />
            <h3 className='noticeItemTitle'>Title</h3>
        </li>
        <li className="noticeItem">
            <img src="" alt="noticeItem" />
            <h3 className='noticeItemTitle'>Title</h3>
        </li>
        <li className="noticeItem">
            <img src="" alt="noticeItem" />
            <h3 className='noticeItemTitle'>Title</h3>
        </li>
        <li className="noticeItem">
            <img src="" alt="noticeItem" />
            <h3 className='noticeItemTitle'>Title</h3>
        </li>
    </ul>
    <Pagenation /> 
    </>
  )
}

export default NoticeContainer