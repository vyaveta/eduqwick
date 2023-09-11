import React from 'react'
import Header from '../../components/header/header'
import SubHeader from '../../components/header/sub-header'
import styles from "./styles.module.css"
import Intro from '../../components/intro/intro'
import Footer from '../../components/home-footer/footer'

const Home = () => {
  return (
    <>
    <div className={styles.container} > 
    <Header />
    <SubHeader />
    <Intro />
    <Footer />
    </div>
    </>
  )
}

export default Home