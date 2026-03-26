import React, { useEffect, useState } from 'react'
import axios from 'axios'





const FeedSection = () => {
  const [posts, setPosts] = useState([])

  useEffect(  () => {
    const fetchPost = async () => {
      const res = await axios.get('https://mern-post-app-tmhb.onrender.com/posts')
      const data = res.data;
      console.log(data);
      setPosts(data.post)

    }
    
    fetchPost()

  }, [])

  return (
    <section className='flex h-[75%] w-[95%] max-w-6xl flex-col gap-8 overflow-y-auto rounded-3xl border border-slate-200 bg-white p-8 shadow-lg'>
      <h1 className='text-3xl font-bold text-slate-800'>Feed</h1>

      <div className='grid gap-6 sm:grid-cols-2 xl:grid-cols-3'>
        {posts.map((post) => (
          
          <article
            key={post._id}
            className='flex flex-wrap justify-between overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm transition hover:-translate-y-1 hover:shadow-md'
          >
            <a href={post.image} target='_blank' rel="noopener noreferrer"><img
              className='h-auto min-w-full object-cover transition duration-200 hover:scale-105 max-h-auto'
              src={post.image}

              alt={post.caption}
            /></a>
            <p className='p-4 mt font-medium text-slate-700'>{post.caption}</p>
            
          </article>
          
        ))}
      </div>
    </section>
  )
}

export default FeedSection
