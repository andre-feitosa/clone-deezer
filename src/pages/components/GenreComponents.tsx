import style from '../../styles/styleComponents/genresComponents.module.css'

import Link from 'next/link';

interface AppProps {
    item: any,
    title: any,
    image: any,
    key: any
}

function Genre(props: AppProps) {

    let resultadoApi = props.item.items

    return(
        <>
            <div className={style.body}>
                {
                    resultadoApi.map((item: any, key: any)=>{
                        return (
                        <div key={key} className={style.list}>
                            <Link href='/genres/[genre]' as={`/genres/${item.id}`} >
                                <img src={`${props.image}`} alt="" />
                            </Link>
                            <h2>{props.title}</h2>
                        </div>
                    )})
                }
            </div>
        </>
    )
}

export default Genre
