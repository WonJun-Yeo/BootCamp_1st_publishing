import React from 'react'
import Pagenation from '../common/Pagenation'

const FreeboardContainer = () => {
  return (
    <>
      <div className='head'>
        <h2>Free Board</h2>
        <div className="serchContainer">
          <select name="" id="">
            <option value="">Title + Writer</option>
            <option value="">Title</option>
            <option value="">Writer</option>
          </select>
          <input></input>
          <button>Search</button>
        </div>
      </div>
      <div>
        <table className='freeBoardTable'>
          <thead>
            <td>No</td>
            <td>Title</td>
            <td>Writer</td>
            <td>Date</td>
          </thead>
          <tbody>
            <tr>
              <td>No</td>
              <td>Title</td>
              <td>Writer</td>
              <td>Date</td>
            </tr>
            <tr>
              <td>No</td>
              <td>Title</td>
              <td>Writer</td>
              <td>Date</td>
            </tr>
            <tr>
              <td>No</td>
              <td>Title</td>
              <td>Writer</td>
              <td>Date</td>
            </tr>
            <tr>
              <td>No</td>
              <td>Title</td>
              <td>Writer</td>
              <td>Date</td>
            </tr>
            <tr>
              <td>No</td>
              <td>Title</td>
              <td>Writer</td>
              <td>Date</td>
            </tr>
            <tr>
              <td>No</td>
              <td>Title</td>
              <td>Writer</td>
              <td>Date</td>
            </tr>
            <tr>
              <td>No</td>
              <td>Title</td>
              <td>Writer</td>
              <td>Date</td>
            </tr>
            <tr>
              <td>No</td>
              <td>Title</td>
              <td>Writer</td>
              <td>Date</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='freeBoardLimit'>
        <select name="" id="">
          <option value="">5</option>
          <option value="">15</option>
          <option value="">25</option>
        </select>
      </div>
      <Pagenation />
    </>
  )
}

export default FreeboardContainer