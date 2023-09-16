import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import { PropTypes } from 'prop-types';


const Blogs = ({handleBookmark,handleMarkAsRead}) => {
    const [ blogs,setBlogs] = useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    },[])
   
    return (
        <div className="md:w-2/3 space-y-20">
            <h1 className="text-4xl"> Blogs: {blogs.length}</h1>
            {
                blogs.map((blog,index) => <Blog 
                key={index}
                blog={blog}
                handleBookmark={handleBookmark}
                handleMarkAsRead={handleMarkAsRead}
                ></Blog>)
            }

        </div>
    );
};
Blogs.propTypes={
    handleBookmark:PropTypes.func,
    handleMarkAsRead:PropTypes.func
}
export default Blogs;