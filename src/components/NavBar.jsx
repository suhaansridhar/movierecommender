import styles from './NavBar.module.css';

export default function NavBar(){
    return(
        <div className={styles.navbar}>
            <div className={styles.navbar__container}>
                <h2>Movie Recommender</h2>
                <p>sign out</p>
            </div>
        </div>
    )
}