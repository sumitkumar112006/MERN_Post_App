import React from 'react'
import CreatePost from './pages/CreatePost'
import { Route, Routes } from 'react-router-dom'
import Buttons from './component/Buttons'
import FeedSection from './pages/FeedSection'


const App = () => {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center gap-6 p-10 '>
      <Routes>
        <Route path='/' element={<CreatePost />} />
        <Route path='/feed' element={<FeedSection />} />
      </Routes>
      <Buttons />
    </div>
  )
}

export default App
