import './index.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


export default function BarraNavegacion(){

    return(
        <header className="navbar">
            <div className="navbar-inner">
                <img
                className="navbar-logo"
                src="https://pub-59ece35300204c2d91a5977706ecf479.r2.dev/Logo_tienda_lotlware.png"
                alt="logo de la tienda"
                />

                <nav aria-label="principal" className='Barranavegacion'>
                    <ul className="navbar-list">
                        <li>Productos</li>
                        <li>Oferta</li>
                        <li>Contáctanos</li>
                        <li><AccountCircleIcon aria-label="Cuenta" /></li>
                        <li><AddShoppingCartIcon aria-label="Carrito" /></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}