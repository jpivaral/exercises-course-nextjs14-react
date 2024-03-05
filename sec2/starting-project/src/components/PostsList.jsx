import Post from "./Post";
import styles from './PostsList.module.css';

function PostsList() {

    return (
        <ul className={styles.posts}>
            <Post author="test" body="test" />
            <Post author="test2" body="test2" />
        </ul>
        );
}

export default PostsList;