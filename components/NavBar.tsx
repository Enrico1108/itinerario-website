import { FC } from "react";
import styles from '../styles/NavBar.module.css';
const NavBar: FC = () => {
  return (
    <>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <a className={styles.a} href="#home">Home</a>
        </li>
        <li className={styles.li}>
          <a  className={styles.a} href="#news">News</a>
        </li>
        <li className={styles.li}>
          <a  className={styles.a} href="#contact">Contact</a>
        </li>
        <li className={styles.li}>
          <a  className={styles.a}  href="#about">About</a>
        </li>
        <h1 className={styles.title}>Itinerário Colégio Progresso 2022</h1>
      </ul>
    </>
  );
};

export { NavBar };
