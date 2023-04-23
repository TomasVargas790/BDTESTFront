import styles from './Login.module.css';
import Link from 'next/link';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
export default function Login({ }: any) {

    return (
        <div className={styles.outerLogin}>
            <form className={styles.form}>
                <div className={styles.innerLogin}>

                    <h1 className={styles.h1}>login</h1>
                    <div>
                        
                        <input className={styles.input} type="text" />
                    </div>
                    <div>
            
                        <input className={styles.input} type="password" name="" id="" />
                    </div>
                    {/* <button className={styles.button} type='submit'>Log in</button> */}
                    <Link className={styles.button} href={'/panel'}>Ingresar</Link>
                </div>
            </form>
        </div>
    )
}