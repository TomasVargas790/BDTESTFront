import Link from 'next/link';
import styles from './Table.module.css';
export default function Table() {
    return (
        <div className={styles.container}>
            <Link href={"/CreateCandidato"} className={styles.boton}>Agregar candidato</Link>
            <table className={styles.table}>
                <thead className={styles.thead}>
                    <tr>
                        <th>documento</th>
                        <th>candidato</th>
                        <th>estado</th>
                        <th>alta</th>
                        <th>ultima evaluacion</th>
                        <th>acciones</th>
                    </tr>
                </thead>
                <tbody className={styles.tbody}>
                    <tr>
                        <td>45238491</td>
                        <td>Tomás Vargas</td>
                        <td><p className={styles.aprobado}> Aprobado creo</p></td>
                        <td>15/04/2023</td>
                        <td>15/04/2023</td>
                        <td><a href="">aa </a> <a href=""> aa</a></td>
                    </tr>
                    <tr>
                        <td>45238491</td>
                        <td>Tomás Vargas</td>
                        <td><p className={styles.expirado}>Aprobado creo</p></td>
                        <td>15/04/2023</td>
                        <td>15/04/2023</td>
                        <td><a href="">aa </a> <a href=""> aa</a></td>
                    </tr>
                    <tr>
                        <td>45238491</td>
                        <td>Tomás Vargas</td>
                        <td><p className={styles.rechazado}>Aprobado creo</p></td>
                        <td>15/04/2023</td>
                        <td>15/04/2023</td>
                        <td><a href="">aa </a> <a href=""> aa</a></td>
                    </tr>
                    <tr>
                        <td>45238491</td>
                        <td>Tomás Vargas</td>
                        <td><p className={styles.enRevision}>Aprobado creo</p></td>
                        <td>15/04/2023</td>
                        <td>15/04/2023</td>
                        <td><a href="">aa </a> <a href=""> aa</a></td>
                    </tr>
                    <tr>
                        <td>45238491</td>
                        <td>Tomás Vargas</td>
                        <td><p className={styles.aprobado}> Aprobado creo</p></td>
                        <td>15/04/2023</td>
                        <td>15/04/2023</td>
                        <td><a href="">aa </a> <a href=""> aa</a></td>
                    </tr>
                    <tr>
                        <td>45238491</td>
                        <td>Tomás Vargas</td>
                        <td><p className={styles.expirado}>Aprobado creo</p></td>
                        <td>15/04/2023</td>
                        <td>15/04/2023</td>
                        <td><a href="">aa </a> <a href=""> aa</a></td>
                    </tr>
                    <tr>
                        <td>45238491</td>
                        <td>Tomás Vargas</td>
                        <td><p className={styles.rechazado}>Aprobado creo</p></td>
                        <td>15/04/2023</td>
                        <td>15/04/2023</td>
                        <td><a href="">aa </a> <a href=""> aa</a></td>
                    </tr>
                    <tr>
                        <td>45238491</td>
                        <td>Tomás Vargas</td>
                        <td><p className={styles.enRevision}>Aprobado creo</p></td>
                        <td>15/04/2023</td>
                        <td>15/04/2023</td>
                        <td><a href="">aa </a> <a href=""> aa</a></td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}
