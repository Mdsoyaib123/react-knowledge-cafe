import { useState } from 'react'
import './App.css'
import Blogs from './component/Blogs/Blogs'

import Header from './component/Header/Header'
import Bookmark from './component/Bookmarks/Bookmarks'




function App() {
  const [bookmark,setBookmark]=useState([])
  const [markTime,setMarkTime] = useState(0)
 
const handleBookmark =blog=>{
  // console.log(blog)
  const newBookmark = [...bookmark,blog]
  setBookmark(newBookmark)
  // console.log(bookmark)
}
const handleMarkAsRead=(time)=>{
    setMarkTime(markTime + time)
   
}
  return (
    <div className='max-w-7xl mx-auto'>
      <Header></Header>
      <div className='md:flex'> 
        <Blogs
         handleBookmark={handleBookmark}
         handleMarkAsRead={handleMarkAsRead}
         ></Blogs>
        <Bookmark bookmark={bookmark} markTime={markTime}></Bookmark>
      
      </div>
      
    </div>
  )
}

export default App
