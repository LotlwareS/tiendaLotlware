import CardImage from './CardImage';
import CardPublicidad from './CardPublicidad';
import styles from './BannerBienvenida.module.css'


export default function BannerBienvenida(){

    return(              

        <section className={styles.seccionBienvenida}>
            <div className={styles.seccionBienvenida__inner}>
                <CardPublicidad textoheader='ENCIENDE TU JUEGO' title='CALL OF  DUTY' subtitle='Disponible para Xbox'/>
                <CardImage src='https://pub-59ece35300204c2d91a5977706ecf479.r2.dev/imgBaner.jpg' alt='Cyber Kid'/>
            </div>           
  
        </section>
        
        
    );
}