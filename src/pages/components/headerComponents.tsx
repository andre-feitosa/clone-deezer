import styles from '../../styles/styleComponents/bodyComponents.module.css'

function Header() {

    return(
        <>
            <div className={styles.Header}>

                <form action="search">
                    <input name='q' type="text" placeholder='Buscar'/>
                </form>

                <div></div>
            </div>
        </>
    )
}

export default Header