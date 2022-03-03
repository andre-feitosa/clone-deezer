import React from 'react'
import { useState } from 'react'
import styles from '../../styles/styleComponents/indexRegisterComponent.module.css'

const RegisterComp = () => {

    return (
        <>
            <div className={styles.resgComp}>
                <h2> deezer Free</h2>
                <p className={styles.p1}>Música, podcasts e rádios. Recomendações personalizadas de acordo<br/>
                com seu gosto musical.</p>
                <button className={styles.click} onClick={()=>open('https://connect.deezer.com/oauth/auth.php?app_id=529802&redirect_uri=http://localhost:3000/register')}>CADASTRE-SE DE GRAÇA</button>
                <p className={styles.p2}>Não precisa pagar nada</p>
            </div>
        </>
    )
}

export default RegisterComp