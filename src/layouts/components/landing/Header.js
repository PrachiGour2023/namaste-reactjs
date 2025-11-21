import React from "react";
import styles from "./style";

function Header() {
  return (
    <div style={styles.container}>
      <img
        src={
          "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg"
        }
        style={styles.headerImage}
        alt="Header Image"
      />
      <div style={styles.titleContainer}>
        <p style={styles.subtitle}>Delicious food delivered to you</p>
        <a style={styles.button}>Explore Here</a>
      </div>
    </div>
  );
}

export default Header;
