import React from 'react'
import styles from './calc.module.css'

let Button = (props: any) => {

    let onClick = (e: any) => {
        props.onClickButton(e.currentTarget.dataset.value)
    }

    return <div>
        <button onClick={onClick} className={styles.button} data-value={props.element}>{props.element}</button>
    </div>
}

export default Button