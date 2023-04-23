import Login from "@/components/Login/Login";
import styles from '../styles/page.module.css';

export default function AppPage() {
    return (
        <div className={styles.divLogin}>
            <Login className={styles.divLogin} />
        </div>
    )
}