import styles from "./Container.module.css"

export default function Container({ customClass, children }) {
    return (
        <div className={`${styles.container} ${styles[customClass]}`}>
            {children}
        </div>
    )
}