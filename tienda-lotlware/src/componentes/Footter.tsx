import './index.css';

export default function Footter(){

    return(
        <footer className="footer">
            <div className="footer__inner">
                <div className="footer__brand">
                    <img
                        src="https://pub-59ece35300204c2d91a5977706ecf479.r2.dev/logo_lotlwareStore.png"
                        alt="Logo Lotlware"
                    />
                </div>

                <div className="footer__col">
                    <h3>Productos</h3>
                    <ul>
                        <li>Juegos</li>
                        <li>Consolas</li>
                        <li>Controles</li>
                        <li>Accesorios</li>
                    </ul>
                </div>

                <div className="footer__col">
                    <h3>Tienda</h3>
                    <ul>
                        <li>Av. Falcon C</li>
                        <li>Ixmiquilpense 10</li>
                        <li>Lun-Vie: 8:00 – 8:00</li>
                        <li>inf@gmail.com</li>
                        <li>+52 772 100 55 20</li>
                    </ul>
                </div>

                <div className="footer__col">
                    <h3>Políticas</h3>
                    <ul>
                        <li>Términos y condiciones</li>
                        <li>Política de envío</li>
                        <li>Política de devolución</li>
                        <li>Política de cookies</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}