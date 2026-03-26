import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Buttons = () => {
  const navigate = useNavigate();
  return (
      <div className= 'fixed bottom-0 flex gap-5'>
      <Link to='/'>
        <button  className='rounded-xl bg-blue-500 px-2 py-2  text-sm font-medium text-white transition hover:bg-blue-600'>
          Create post
        </button>
      </Link>
      <Link to='/feed'>
        <button  className='rounded-xl border border-slate-300 py-2 text-sm font-medium text-slate-700 transition  bg-gray-300 hover:bg-slate-100'>
          View post
        </button>
      </Link>
      
      
    </div>
  )
}

export default Buttons
