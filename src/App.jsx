import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmark from './component/Bookmark/Bookmark'
import Header from './component/Header/Header'

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Header></Header>
      <div className='md:flex'>
        <Blogs></Blogs>
        <Bookmark></Bookmark>
      
      </div>
    </div>
  )
}

export default App
