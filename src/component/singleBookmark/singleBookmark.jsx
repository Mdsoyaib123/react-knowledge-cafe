
import PropTypes from 'prop-types';
const SingleBookmark = ({singleBook}) => {
    const {Title}= singleBook
    return (
        <div className='bg-gray-300 p-6 rounded-lg m-5 text-center'>
            <h2>{Title}</h2>
        </div>
    );
};
SingleBookmark.propTypes={
    singleBook:PropTypes.object
}
export default SingleBookmark;