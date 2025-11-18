import BannerHeader from "../componentes/BannerHeader";
import CardProducto from "../componentes/CardProducto";
import styles from "./Productos.module.css";
import RemoveIcon from '@mui/icons-material/Remove';


const Consolas =[
 
    { 
        id: 1, 
        name:"consola RX",
        price:45.22, 
        urlImage:"https://pub-59ece35300204c2d91a5977706ecf479.r2.dev/consola.jpg" 

    },{ 
        id: 2, 
        name:"Gaming mouse", 
        price:28.99,
        urlImage:"https://pub-59ece35300204c2d91a5977706ecf479.r2.dev/Gaming%20mouse.jfif" 

    },{ 

        id: 3,
        name:"Gaming mouse", 
        price:28.99, 
        urlImage:"https://pub-59ece35300204c2d91a5977706ecf479.r2.dev/Gaming%20mouse.jfif" 

    },{ 
        id: 4, 
        name:"Gaming mouse", 
        price:28.99,
        urlImage:"https://pub-59ece35300204c2d91a5977706ecf479.r2.dev/Gaming%20mouse.jfif" 

    },{ 

        id: 5,
        name:"Gaming mouse", 
        price:28.99, 
        urlImage:"https://pub-59ece35300204c2d91a5977706ecf479.r2.dev/Gaming%20mouse.jfif" 

    },{ 

        id: 6,
        name:"Gaming mouse", 
        price:28.99, 
        urlImage:"https://pub-59ece35300204c2d91a5977706ecf479.r2.dev/Gaming%20mouse.jfif" 

    },{ 

        id: 7,
        name:"Gaming mouse", 
        price:28.99, 
        urlImage:"https://pub-59ece35300204c2d91a5977706ecf479.r2.dev/Gaming%20mouse.jfif" 

    } ,{ 

        id: 8,
        name:"Gaming mouse", 
        price:28.99, 
        urlImage:"https://pub-59ece35300204c2d91a5977706ecf479.r2.dev/Gaming%20mouse.jfif" 

    } ,{ 

        id: 9,
        name:"Gaming mouse", 
        price:28.99, 
        urlImage:"https://pub-59ece35300204c2d91a5977706ecf479.r2.dev/Gaming%20mouse.jfif" 

    }   
];


export default function Prodcutos(){

    return(
        <section className={styles.Productos}>
            <BannerHeader/>
            <section className={styles.container}>
                <article className={styles.list__continer}>
                    <hr/>
                    <ul>
                        <li>Todos</li>
                        <li>Consolas</li>
                        <li>Controles</li>
                        <li>Accesorios</li>
                        <li>Ofertas</li>
                        <li>Mas Vendidos</li>
                    </ul>
                    <hr/>
                    <span>Price  <RemoveIcon/></span>
                </article>
                <div className={styles.container__Products}>
                    
                    {Consolas.map(
                        (c)=>(
                            <CardProducto id={c.id} name={c.name} price={c.price} urlImage={c.urlImage}/>
                        )
                    )}

                </div>
            </section>

        </section>
    );
}