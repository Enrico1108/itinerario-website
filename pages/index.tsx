import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { NavBar } from '../components/NavBar'

const Home: NextPage = () => {
  return (
    <div >
      <NavBar></NavBar>
      <iframe className={styles.main} src="https://editor.p5js.org/lucas.teixeira-booming/full/7OpnjSaWx"></iframe>
    </div>
  )
}

export default Home
