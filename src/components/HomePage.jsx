import { useState } from "react";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const [name, setName] = useState("");
  function handleSearch() {
    console.log("Searched");
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
