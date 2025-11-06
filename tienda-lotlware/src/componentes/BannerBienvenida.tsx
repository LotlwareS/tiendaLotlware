import CardImage from './CardImage';
import './index.css';


export default function BannerBienvenida(){

    return(
        <>          

            <section className="hero">
                <div className="hero__inner">
                    <div className="hero__card">
                        <span className="hero__eyebrow">ENCIENDE TU JUEGO</span>
                        <h1 className="hero__title">
                            CYBER KID<br />INFINITO
                        </h1>
                        <p className="hero__subtitle">Disponible en PC y Consola</p>

                        <button className="hero__btn" type="button">
                            Comprar ahora
                        </button>
                    </div>
                    <CardImage src='https://pub-59ece35300204c2d91a5977706ecf479.r2.dev/imgBaner.jpg' alt='Cyber Kid'/>
                </div>
                
            </section>
        
        </>
    );
}