import styles from './Post.module.css';

function Post(props) {

    const author = props.author;
    const body = props.body;

    return (
        <li className={styles.post}>
            <p className={styles.author}>{author}</p>
            <p className={styles.text}>{body}</p>
        </li>)
    ;
}

export default Post;