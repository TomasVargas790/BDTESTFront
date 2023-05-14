import styles from "./NewCandidatoForm.module.css";

const NewCandidatoForm = () => {
  return (/*
    <div className={styles.container}>
      <h2>Cargar candidato</h2>
      <form action="">
        <div className={styles.wrapper}>
          <div className={styles.input_div}>
            <label className={styles.label} htmlFor="nombre">Nombre</label>
            <input className={styles.input} id="nombre" type="text" />
          </div>
          <div className={styles.input_div}>
            <label className={styles.label} htmlFor="apellido">Apellido</label>
            <input className={styles.input} id="apellido" type="text" />
          </div>
          <div className={styles.input_div}>
            <label className={styles.label} htmlFor="documento">Documento</label>
            <input className={styles.input} id="documento" type="number" maxLength={8} />
          </div>
          <div className={styles.input_div}>
            <label className={styles.label} htmlFor="correo">Correo</label>
            <input className={styles.input} id="correo" type="text" />
          </div>
          <div className={styles.input_div}>
            <label className={styles.label} htmlFor="nombre">Telefono</label>
            <input className={styles.input} id="nombre" type="text" />
          </div>
          <div className={styles.input_div}>
            <label className={styles.label} htmlFor="lenguaje">Lenguaje</label>
            <select name="" id="lenguaje">
              <option value="">JavaScript</option>
              <option value="">PHP</option>
              <option value="">SQL</option>
              <option value="">Python</option>
            </select>
          </div>
          <div className={styles.input_div}>
            <label className={styles.label} htmlFor="nombre">Cargar Curriculum</label>
            <input className={styles.input} id="nombre" type="file" />
          </div>
          <div className={styles.input_div}>
            <label className={styles.label} htmlFor="usuario">Usuario</label>
            <input className={styles.input} id="usuario" type="text" />
          </div>
          <div className={styles.input_div}>
            <label className={styles.label} htmlFor="clave">Clave</label>
            <input className={styles.input} id="clave" type="text" />
          </div>
        </div>
      </form >
    </div>*/

    <div className={styles.wrapper}>
      <div className={styles.caja}></div>
      <div className={styles.caja}></div>
      <div className={styles.caja}></div>
      <div className={styles.caja}></div>
    </div>
  )
}

export default NewCandidatoForm
