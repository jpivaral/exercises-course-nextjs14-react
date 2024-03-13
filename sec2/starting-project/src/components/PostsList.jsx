import { useState } from 'react';

import Post from "./Post";
import NewPost from './NewPost';
import Modal from './Modal';
import styles from './PostsList.module.css';

function PostsList({ isPosting, onStopPosting }) {

    const [posts, setPosts] = useState([]);

    function addPostHander(postData) {
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    return (
        <>
            {isPosting && ( 
                <Modal onClose={onStopPosting} >
                    <NewPost onCancel={onStopPosting} onAddPost={addPostHander} />
                </Modal>)
            } 
            {posts.length > 0 && (            
                <ul className={styles.posts}>
                    {posts.map((post) => <Post key={post.body} author={post.author} body={post.body} />)}
                </ul>
                )}
            {posts.length === 0 && (
                <div style={{textAlign: 'center', color: 'white'}}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            )}
        </>
        );
}

export default PostsList;