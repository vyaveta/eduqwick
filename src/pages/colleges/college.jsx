import React from 'react'
import Header from '../../components/header/header'
import SubHeader from '../../components/header/sub-header'
import Left from './components/left'
import style from "./style.module.css"
import Right from './components/right'

const College = () => {
  return (
    <>
    <Header />
    <SubHeader />
    <div className={style.college_wrap}>
    <div className={style.college} >
    <Left />
    <Right />
    </div>
    </div>
    </>
  )
}

export default College