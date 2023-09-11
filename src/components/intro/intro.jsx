import React from 'react'
import styles from "./styles.module.css"

const Intro = () => {
    return (
        <div className={styles.container}>
            <div className={styles.image_div}>
                <img height="200" src="https://static.vecteezy.com/system/resources/previews/001/839/120/original/man-using-laptop-computer-icon-free-vector.jpg" alt="" />
            </div>
            <div className={styles.intro_text_div} >
                <h1>From First College Admission to 1st job Placement</h1>
                <p>we are with you...!!!</p>
                <div className={styles.button_div} >
                    <button>Secure your growth</button>
                    <button>Get Enrolled Now</button>
                </div>
            </div>
            <div className={styles.image_div}>
                <img height="200" src="https://149517326.v2.pressablecdn.com/wp-content/uploads/2020/08/Screen-Shot-2020-08-21-at-3.55.42-PM.png" alt="" />
            </div>
            
        </div>
    )
}

export default Intro