import styles from './Table.module.css';
export default function Table() {
    return (
        <table className={styles.table}>
            <thead className={styles.thead}>
                <tr >
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
                    <td>Aprobado creo</td>
                    <td>15/04/2023</td>
                    <td>15/04/2023</td>
                    <td><a href="">aa </a> <a href=""> aa</a></td>
                </tr>
            </tbody>
        </table>
    )
}
