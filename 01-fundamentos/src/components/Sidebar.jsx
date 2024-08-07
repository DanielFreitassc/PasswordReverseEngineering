import Styles from "./Sidebar.module.css"
import { PencilLine } from "phosphor-react"
export const Sidebar = () => {
    return(

        <aside className={Styles.sidebar}>
            <img 
                className={Styles.cover} 
                src="https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className={Styles.profile}>
                <img className={Styles.avatar} src="https://avatars.githubusercontent.com/u/129224303?v=4"/>
                <strong>Daniel Freitas</strong>
                <span>Backend</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}