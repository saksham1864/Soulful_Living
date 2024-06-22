'use client'
import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>Soulful Living</div>
        {/* Hamburger menu button for small screens */}
        <button className={styles.hamburgerButton} onClick={toggleNav}>
          <span className={styles.hamburgerIcon}></span>
        </button>
        {/* Desktop navigation links */}
        <nav className={`${styles.nav} ${showNav ? styles.showNav : ''}`}>
          <a href="#blogs">Blogs</a>
          <a href="#featured">Featured</a>
          <a href="#upload">Upload</a>
          <a href="#about">About</a>
          <button className={styles.profileButton}>My profile</button>
        </nav>
      </header>

      <main className={styles.main}>
        <h1 className={`${styles.title} ${styles.bold}`}>Documenting the pursuit of <i className={styles.ind}>learning</i> and <i className={styles.ind}>growth</i>.</h1>
        <button className={styles.browseButton}>Browse our Blogs</button>
      </main>
      <div className=' p-4  text-end'>  All rights reserved |  Made  by <a href='https://github.com/saksham1864'><u>saksham</u></a>   </div>
    </div>
  );
}
