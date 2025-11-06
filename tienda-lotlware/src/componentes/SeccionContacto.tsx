export default function SeccionContacto(){

    return(
        <section className="SeccionContacto">
            <article>
                <div>
                    <h1 className="SeccionContacto-title">BOLETIN</h1>
                    <p className="SeccionContacto-text">Suscribete al boletin de noticias de <br/>
                       prodctos y ofertas especiales
                    </p>
                </div>
                <div>
                    <div>
                        <label className="SeccionContacto-label">Email*</label>
                        <br/>
                        <input className="SeccionContacto-input"/>
                        <br/>
                        <button className="SeccionContacto-btn">Enviar</button>
                    </div>
                    <p>¡Gracias por tu mensaje!</p>
                </div>
            </article>
        </section>
    );
}