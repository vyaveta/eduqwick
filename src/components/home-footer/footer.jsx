import React from 'react'
import styles from "./style.module.css"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top1} >
                <img className={styles.icon} width="64" height="64" src="https://img.icons8.com/wired/64/commercial.png" alt="commercial" />
                {/* <div> */}
                    <p>JEE Answer key 2023 released</p>
                    <p>DU release new courses list</p>
                    <p>Lpu Application from live</p>
                    <p>Parul to conduct convocation</p>
                {/* </div> */}
            </div>
            <div className={styles.top2} >
                <div>
                    <span>10,000</span>
                    <span>Application Registered</span>
                </div>
                <div>
                    <span>10,000</span>
                    <span>Application Registered</span>
                </div>
                <div>
                    <span>10,000</span>
                    <span>Application Registered</span>
                </div>
            </div>
        </div>
    )
}

export default Footer