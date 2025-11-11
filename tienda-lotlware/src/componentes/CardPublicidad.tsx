import BtnCompra from "./BtnCompra";
import styles from "./CardPublicidad.module.css";

type CardPublicidadProps = {
    textoheader:string;
    title:string;
    subtitle:string;
}


export default function CardPublicidad({textoheader,title,subtitle}:CardPublicidadProps){
    return(
        
        <div className={styles.cuadroTexto1__card}>
            <span className={styles.cuadroTexto1__eyebrow}>{textoheader}</span>
            <h1 className={styles.cuadroTexto1__title}>
                {title}
            </h1>
            <p className={styles.cuadroTexto1__subtitle}>{subtitle}</p>

            <BtnCompra name='Comprar Ahora'/>                        
        </div>
        
    );
}