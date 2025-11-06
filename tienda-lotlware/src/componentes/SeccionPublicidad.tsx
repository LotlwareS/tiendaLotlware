import BtnCompra from "./BtnCompra";
import './index.css';


export default function SeccionPublicidad(){

    return(
        <section className="SeccionPublicidad">
            <div className="SeccionPublicidad-container">
                <h1 className="SeccionPublicidad-title">GASTA Y AHORRA</h1>
                <div className="SeccionPublicidad-text">
                    <p>Ahorra un 20% mas de $150</p>
                </div>
                <BtnCompra name="Comprar ahora"/>
            </div>
        </section>
    );
}