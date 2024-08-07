import Styles from "./Post.module.css"
export const Post = () => {
    return(
        <article className={Styles.post}>
            <header>
                <div className={Styles.author}>
                    <img 
                    className={Styles.avatar}
                    src="https://avatars.githubusercontent.com/u/129224303?v=4"
                    />
                    <div className={Styles.authorInfo}>
                        <strong>Daniel Freitas</strong>
                        <span>Backend</span>
                    </div>
                </div>

                <time title="11 de Maio às 08:13" dateTime="2024-05-11 08:13:30">Publicada há 1h</time>
            </header>

            <div className={Styles.content}></div>
            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        </article>
    )
} 