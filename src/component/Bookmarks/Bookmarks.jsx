
import { PropTypes } from 'prop-types';

import SingleBookmark from './../singleBookmark/singleBookmark';

const Bookmark = ({bookmark ,markTime}) => {
    
    return (
        <div className="md:w-1/3 text-center bg-slate-400">
            <p className='bg-gray-200 m-4 rounded-lg font-extrabold py-3 px-5'>Spent time on read: {markTime}</p>
            <h2 className='mb-5 text-3xl font-bold'>Bookmark :{bookmark.length}</h2>
            {
                bookmark.map((singleBook, index)=><SingleBookmark key={index}
                singleBook={singleBook}
                
                ></SingleBookmark> )
            } 
            
            
        </div>
    );
};
Bookmark.propTypes={
    bookmark:PropTypes.array,
    markTime:PropTypes.number
}

export default Bookmark;