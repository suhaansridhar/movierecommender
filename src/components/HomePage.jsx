import { useState } from "react";
import styles from "./HomePage.module.css";
import { fetchMovies } from "../services/SearchApi";


//http://www.omdbapi.com/?i=tt3896198&apikey=59837dd7
export default function HomePage() {
  const [name, setName] = useState("");
  const [error, setError] = useState('');
  async function handleSearch(name) {
    try{
        const results = await fetchMovies(name);
        setError('');
    }catch(err){
        setError('Failed to fetch movies!');
    }
  }
  return (
    <div className={styles.homepage}>
      <form className={styles.form} action={handleSearch}>
        <input
          type="text"
          placeholder="Enter the movie you want to search"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
