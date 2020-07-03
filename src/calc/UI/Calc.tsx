import React from 'react'
import Button from "./Button"
import styles from './calc.module.css'


interface IProps {
    onClickButton: any
    setResult: any
    delResult: any
    elementsButton: string[]
    resultText: string
    result: string
    resultAll: number[]
}


let Calc = (props: IProps) => {

    let onClickButton = (value: string) => {
        props.onClickButton(value)
    }

    return <div>
        <div className={styles.calcField}>
            <div className={styles.calcResultField}>
                <div className={styles.resultText}>
                    {props.resultText}
                </div>
                <div className={styles.result}>
                    {props.result !== '0' && props.result}
                </div>
            </div>
            <button className={styles.resultButton}>Result ALL</button>
            <div className={styles.keyboardRow}>
                {props.elementsButton.map((el: string) => <Button onClickButton={onClickButton} element={el}/>)}
            </div>
        </div>
    </div>
}

export default Calc