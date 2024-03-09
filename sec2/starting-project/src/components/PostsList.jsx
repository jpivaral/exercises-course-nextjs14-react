import { useState } from 'react';

import Post from "./Post";
import NewPost from './NewPost';
import styles from './PostsList.module.css';

function PostsList() {
    const [enteredBody, setEnteredBody] = useState('');

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    return (
        <>
            <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={bodyChangeHandler} />
            <ul className={styles.posts}>
                <Post author="test" body={enteredBody} />
                <Post author="test2" body="test2" />
            </ul>
        </>
        );
}

export default PostsList;