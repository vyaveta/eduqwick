import React from 'react'
import styles from "./header.module.css"
import { useNavigate } from 'react-router-dom'

const SubHeader = () => {

const navigate = useNavigate()

    return (
        <div className={styles.sub_container} >
            <div>
                <img height={100} width={100} src="https://media.licdn.com/dms/image/D4D0BAQEolL0WzC0Qwg/company-logo_200_200/0/1690477575730?e=2147483647&v=beta&t=8-_KlLGlQx4TPesM6CRsOWHLcjsyHqQliHiAvMYSjeo" alt="image" />
            </div>
            <div>
                <p onClick={() => navigate("/college")} >Colleges</p>
                <p>Courses</p>
                <p>Exams</p>
                <p>Study Abroad</p>
                <p>Get Counselling</p>
                <p>Latest News</p>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
                    <path d="M 21 3 C 11.654545 3 4 10.654545 4 20 C 4 29.345455 11.654545 37 21 37 C 24.701287 37 28.127393 35.786719 30.927734 33.755859 L 44.085938 46.914062 L 46.914062 44.085938 L 33.875 31.046875 C 36.43682 28.068316 38 24.210207 38 20 C 38 10.654545 30.345455 3 21 3 z M 21 5 C 29.254545 5 36 11.745455 36 20 C 36 28.254545 29.254545 35 21 35 C 12.745455 35 6 28.254545 6 20 C 6 11.745455 12.745455 5 21 5 z"></path>
                </svg>

                <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/user-male-circle.png" alt="user-male-circle"/>
            </div>

        </div>
    )
}

export default SubHeader