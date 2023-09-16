import PropTypes from 'prop-types';
import {FaBookmark } from 'react-icons/fa';
const Blog = ({blog,handleBookmark,handleMarkAsRead}) => {
    // console.log(blog)
   const {Title,Cover,Reading_Time,Author,Author_img ,Posted_Date,Hashtag}= blog;
    return (
        <div className='space-y-3'>
            <img className='h-96 w-full' src={Cover} alt={`cover pichter of the title ${Title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <img className='w-14' src={Author_img} alt="" />
                        <div className='ml-6'>
                            <h2 >{Author}</h2>
                            <p>{Posted_Date}</p>
                        </div>
                </div>
                <div>
                    <span>{Reading_Time} min read </span>
                    <button onClick={()=>handleBookmark(blog)}><FaBookmark></FaBookmark></button>
                </div>

            </div>
            <h2 className='text-4xl'>{ Title}</h2>
            <p> <a href="">{Hashtag}</a> </p>
            <button onClick={()=>handleMarkAsRead(Reading_Time)} className='text-blue-800 underline'>Mark as read</button>

        </div>
    );
};
Blog.propTypes = {
   blog: PropTypes.object.isRequired,
   handleBookmark:PropTypes.func,
   handleMarkAsRead:PropTypes.func
}
export default Blog;