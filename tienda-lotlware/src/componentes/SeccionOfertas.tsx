import BtnCompra from "./BtnCompra";
import CardImage from "./CardImage";
import './index.css';

export default function SeccionOfertas(){

    return(
        <section className="SeccionOfertas">
            <div className="SeccionOfertas-products-container">
                <CardImage alt="Banner 1" src="https://pub-59ece35300204c2d91a5977706ecf479.r2.dev/BANNER2.jpg"/>
                <CardImage alt="Banner 2" src="https://pub-59ece35300204c2d91a5977706ecf479.r2.dev/Banner3.jpg"/>
                <CardImage alt="Banner 3" src="https://pub-59ece35300204c2d91a5977706ecf479.r2.dev/Banner4.jpg"/>
            </div>
            <div className="ofertas-Card">
                <span className="oferta__eyebrow">Ofertas de La semana</span>
                <h1 className="oferta__titulo">
                    -10%<br />JUEGOS
                </h1>                       
                <BtnCompra name="Comprar ahora"/>
                
            </div>
        </section>
    );
}