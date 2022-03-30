import React from 'react'

import styles from '../../styles/styleComponents/indexRegisterComponent.module.css'

const RegisterComp = () => {

    return (
        <>
            <div className={styles.resgComp}>
                <h2> deezer Free</h2>
                <p className={styles.p1}>Escute suas musicas preferidas de graça</p>
                <button className={styles.click} onClick={()=>open("http://localhost:3000/home", '_self')}>COMECE AGORA</button>
                <p className={styles.p2}>Não precisa pagar nada</p>
            </div>
        </>
    )
}

export default RegisterComp