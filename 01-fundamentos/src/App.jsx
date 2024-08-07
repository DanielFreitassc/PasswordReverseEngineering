import { Header } from "./components/Header"
import './global.css'
import styles from "./App.module.css"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

export const App = () => {
    return(
        <>
            <Header/>   
            
            <div className={styles.wrapper}>
                <Sidebar/>
                <main>
                    <Post
                    author = "Daniel Freitas"
                    content = "Lorem ipsum dolor sit"
                    />

                    <Post
                    author = "Luiz zomer"
                    content = "Lorem ipsum dolor sit"
                    />
                </main>
            </div>
        </>
    )
}