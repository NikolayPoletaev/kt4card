import { useState } from 'react'
import img from './img/logo.png'
import styles from './Card.module.css'
function CardForm({addTodo}) {
    const [text,setText] = useState('')
    const [number,setNumber] = useState('')
    const [mm,setMm] = useState('')
    const [yy,setYy] = useState('')
    const [cvc,setCvc] = useState('')

    function onSumbitHandler(event) {
        event.preventDefault()
        addTodo(text,number,mm,yy)
        setText('')
        setNumber('')
        setMm('')
        setYy('')
    }

    function onSumbitHandlerTwo(event) {
        event.preventDefault()
        addTodo(cvc)
        setCvc('')
    }

    return (
        <div className={styles.Card}>
            <div className={styles.CardOne}>
            <form onSubmit={onSumbitHandler}>
                <input
                className={styles.holder}
                placeholder='Holder on card'
                value={text}
                onChange={(e) => setText(e.target.value)}
                />
                <input
                className={styles.number}
                placeholder='Number of card'
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                />
                <label className={styles.spantxt}>VALID THRU</label>
                <div className={styles.mmyy}>
                <input
                className={styles.mm}
                placeholder='MM'
                value={mm}
                onChange={(e) => setMm(e.target.value)}
                />
                <div className={styles.span}>/</div>
                <input
                className={styles.yy}
                placeholder='YY'
                value={yy}
                onChange={(e) => setYy(e.target.value)}
                />
                <img src={img}/>
                </div>
            </form>
            </div>
            <div className={styles.TwoCard}>
            <form onSubmit={onSumbitHandlerTwo} className={styles.cvc}>
                <input 
                className='cvctxt'
                placeholder='CVC'
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                />
            </form>
            </div>
        </div>
    )
}
export default CardForm