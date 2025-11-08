import BannerBienvenida from "../componentes/BannerBienvenida";
import SeccionCategorias from "../componentes/SeccionCategorias";
import SeccionContacto from "../componentes/SeccionContacto";
import SeccionOfertas from "../componentes/SeccionOfertas";
import SeccionProductos from "../componentes/SeccionProductos";
import SeccionPublicidad from "../componentes/SeccionPublicidad";

const Juegos =[
 
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

    } 
];

const AcesoriosPc = [
    { 
        id: 1, 
        name:"Udifonos Sony",
        price:30.75, 
        urlImage:"https://pub-59ece35300204c2d91a5977706ecf479.r2.dev/audifonosAI.png" 

    },{
        id:2,
        name:"Control Xbox",
        price:56.2,
        urlImage:"https://pub-59ece35300204c2d91a5977706ecf479.r2.dev/Jogue%20com%20esse.jpg"
    },{
        id:2,
        name:"Control PSP5",
        price:56.2,
        urlImage:"https://pub-59ece35300204c2d91a5977706ecf479.r2.dev/The%20%20Black%20controller.jpg"
    }



];

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

    } 
];


export default function Home(){    

    return(
        <>
            <BannerBienvenida/>
            <SeccionProductos  productos={Juegos} isLoading={false} />
            <SeccionOfertas/>
            <SeccionCategorias/>
            <SeccionProductos productos={AcesoriosPc} titulo="Adquiere tus Acesorios" isLoading={false}/>
            <SeccionPublicidad/>
            <SeccionProductos productos={Consolas} titulo="Adquiere tus Consolas" isLoading={false}/>
            <SeccionContacto/>            
        
        </>
    );
}