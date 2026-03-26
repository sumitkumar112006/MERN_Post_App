import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const CreatePost = () => {
    const API = 'https://mern-post-app-tmhb.onrender.com'
      const navigate = useNavigate()
    

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        try {
            const res = await axios.post(`${API}/create-post`, formData)
            alert("Post created successfully!")
            console.log(res.data)
            e.target.reset()
            navigate('/feed')
        } catch (error) {
            console.error('Error creating post:', error.response?.data || error.message)
        }
    }
    return (
        <section id='post' className='flex h-[75%] w-[95%] max-w-xl flex-col gap-8 rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg'>
            <h1 className='text-3xl font-bold text-slate-800'>Create post</h1>

            <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
                <input type="file" name='image' accept='image/*' className='rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-700 file:mr-4 file:rounded-lg file:border-0 file:bg-blue-500 file:px-4 file:py-2 file:font-medium file:text-white'/>
                <input className='rounded-xl border border-slate-300 px-4 py-3 text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200' type="text" name='caption' placeholder='Enter your caption...' required />
                <button type='submit' className='rounded-xl bg-blue-500 px-5 py-3 font-semibold text-white transition hover:bg-blue-600'>
                  Submit
                </button>
            </form>

            
      </section>
  )
}

export default CreatePost;
