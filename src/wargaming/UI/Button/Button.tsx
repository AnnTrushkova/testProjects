import React from 'react'
import styles from './button.module.css'


const Button = (props: any) => {
    return <button {...props} className={styles.customButton}>
        {props.children}
    </button>
}

export default Button