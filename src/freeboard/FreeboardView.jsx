import React from 'react'

const FreeboardContainer = () => {
  return (
    <>
      <div className='head'>
        <h2>Free Board</h2>
        <div className="searchContainer">
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
      <div className='buttonGroup'>
        <button type='button'>prev</button>
        <button type='button'>1</button>
        <button type='button'>2</button>
        <button type='button'>3</button>
        <button type='button'>4</button>
        <button type='button'>5</button>
        <button type='button'>next</button>
      </div>



    </>
  )
}

export default FreeboardContainer