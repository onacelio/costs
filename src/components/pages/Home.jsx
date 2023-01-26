import styles from "./Home.module.css"
import savings from "../../img/savings.svg"
import LinkButton from "../layout/LinkButton"

export default function Home() {
    return (
        <section className={styles.homeContainer}>
            <div className={styles.content}>
                <h1>Bem-vindo ao <span>Costs</span></h1>
                <p>Comece a gerenciar os seus projetos agora mesmo</p>
                <LinkButton to="new-project" text="Criar projeto" />
            </div>
            <div className={styles.img}>
                <img src={savings} alt="costs" />
            </div>
        </section>
    )
}