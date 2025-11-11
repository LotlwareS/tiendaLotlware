import './index.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import styles from "./BarraNavegacion.module.css";


export default function BarraNavegacion(){

    return(
        <header className={styles.navbar}>
            <div className={styles.navbar_inner}>
                <img
                    className={styles.navbar_logo}
                    src="https://pub-59ece35300204c2d91a5977706ecf479.r2.dev/Logo_tienda_lotlware.png"
                    alt="logo de la tienda"
                />

                <nav aria-label="principal" className={styles.Barranavegacion}>
                    <ul className={styles.navbar_list}>
                        <Link to="/Productos">Productos</Link>
                        <li>Oferta</li>
                        <Link to="/Contacto">Contáctanos</Link>
                        <li><AccountCircleIcon aria-label="Cuenta" /></li>
                        <li><AddShoppingCartIcon aria-label="Carrito" /></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}