import styles from "./Contacto.module.css"
export default function Contacto(){

    return(
        <section className={styles.container}>
            <div className={styles.header}>
                <h1>¿Ayuda?</h1>
            </div>
            <div className={styles.body}>
                <aside className={styles.informacion}>
                    <h2>Contactanos</h2>
                    
                    <ul className={styles.infoList}>
                        <li>Info@correo.com</li>
                        <li>info@correo.com</li>
                        <li>Tel: +52 7721839021</li>
                        <li>Av. Angeles #45, Col. Centro Ixmiquilpan, HGO</li>
                    </ul>
                    <div className={styles.mapWrapper}>
                        <iframe
                            className={styles.mapFrame}
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7475.157645688957!2d-99.20597977668835!3d20.482484963229485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1763534754251!5m2!1ses-419!2smx"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                        ></iframe>
                    </div>
                </aside>
                <article className={styles.articleForm}>
                    <form className={styles.formulario}>
                        <div className={styles.formContainer}>
                            <div className={styles.inputsContainer}>
                                <label htmlFor="fname">Nombre</label>
                                <input  type="text" id="fname" className={styles.inputLeft}></input>
                            </div>
                            <div className={styles.inputsContainer}>
                                <label htmlFor="fApellido" >Apelido</label>
                                <input type="text" id="fApellido" className={styles.inputRigth}></input>
                            </div>
                        </div>
                        <div className={styles.formContainer}>
                            <div className={styles.inputsContainer}>
                                <label htmlFor="fEmail" >Email</label>
                                <input type="text" id="fEmail" ></input>
                            </div>
                            <div className={styles.inputsContainer}>
                                <label htmlFor="ftel" >Telefono</label>
                                <input type="text" id="fTel" ></input>
                            </div>
                        </div>
                        <div className={styles.inputsContainer}>
                            <label htmlFor="fMsg" className={styles.lblTexarea}>Dejanos un mensaje</label>
                            <textarea id="fMsg"></textarea>
                            <button type="submit">Enviar</button>
                        </div>

                    </form>
                </article>
            </div>

        </section>
    );
}