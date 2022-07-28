import Share from '../share/Share';
import Post from '../post/Post';
import './feed.css';

function Feed(props) {
    return (
        <div className='feed'>
            <div className='feedWrapper'>
                <Share/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    );
}

export default Feed;