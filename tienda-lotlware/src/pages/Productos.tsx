import BannerHeader from "../componentes/BannerHeader";
import CardProducto from "../componentes/CardProducto";
import FilterSidebar from "../componentes/FilterSidebar/FilterSidebar";
import styles from "./Productos.module.css"
import  {  useState } from "react";

type Category = 
| "Consolas"
| "Juegos"
| "Controles"
| "Accesorios"


type Product ={
    id:number;
    name: string;
    price:number;
    urlImage:string;
    category: Category;
    isOffer?:boolean;
    isBestSeller?:boolean;
}

const productos:Product[] = [
 
    { 
        id: 1, 
        name:"consola RX",
        price:450.22, 
        urlImage:"https://pub-59ece35300204c2d91a5977706ecf479.r2.dev/consola.jpg",
        category: "Consolas",
        isBestSeller: false

    },{ 
        id: 2, 
        name:"Gaming mouse", 
        price:280.99,
        urlImage:"https://pub-59ece35300204c2d91a5977706ecf479.r2.dev/The%20%20Black%20controller.jpg",
        category: "Controles",
        isBestSeller: true 

    },{ 

        id: 3,
        name:"Gaming mouse", 
        price:280.99, 
        urlImage:"https://pub-59ece35300204c2d91a5977706ecf479.r2.dev/Gaming%20mouse.jfif",
        category: "Accesorios",
        isBestSeller: true 

    },{ 
        id: 4, 
        name:"", 
        price:280.99,
        urlImage:"https://pub-59ece35300204c2d91a5977706ecf479.r2.dev/Gaming%20mouse.jfif",
        category: "Accesorios",
        isBestSeller: true  

    },{ 

        id: 5,
        name:"Ariculares Sony", 
        price:280.99, 
        urlImage:"https://pub-59ece35300204c2d91a5977706ecf479.r2.dev/Gaming%20mouse.jfif",
        category: "Accesorios",
        isBestSeller: true  

    },{ 

        id: 6,
        name:"Audifonos con AI", 
        price:280.99, 
        urlImage:"https://pub-59ece35300204c2d91a5977706ecf479.r2.dev/audifonosAI.png",
        category: "Accesorios",
        isBestSeller: true  

    },{ 

        id: 7,
        name:"Gaming mouse", 
        price:280.99, 
        urlImage:"https://pub-59ece35300204c2d91a5977706ecf479.r2.dev/mause.jpg",
        category: "Controles",
        isBestSeller: false  

    } ,{ 

        id: 8,
        name:"Gaming mouse", 
        price:280.99, 
        urlImage:"https://pub-59ece35300204c2d91a5977706ecf479.r2.dev/juego2.jpg",
        category: "Juegos",
        isBestSeller: true  

    } ,{ 

        id: 9,
        name:"Gaming mouse", 
        price:280.99, 
        urlImage:"https://pub-59ece35300204c2d91a5977706ecf479.r2.dev/juego1.jpg",
        category: "Juegos",
        isBestSeller: true  

    }   
];

const filterlByCategory = (arr: Product[], cat:string)=>{

    if (cat === "Todos") return arr;

    if(cat === "Ofertas"){
        return arr.filter((p)=> p.isOffer);
    }

    if(cat === "Mas vendido"){
        return arr.filter((p)=> p.isBestSeller)
    }

    return arr.filter((p)=> p.category === cat);
}

const filterByPrice = (arr: Product[], min:number, max:number)=>
    arr.filter((p)=> p.price >= min && p.price <= max);




export default function Productos(){

    // estado ejemplo (opcional) para filtros
    const [cat, setCat] = useState<string>("Todos");
    const [range, setRange] = useState({min:150, max:900});

    const filtrados = filterByPrice(
        filterlByCategory(productos, cat),
        range.min,
        range.max
    );

    return(
        <section className={styles.Productos}>
            <BannerHeader/>
            <section className={styles.container}>
                <FilterSidebar 
                    selectedCategory={cat}
                    onSelectCategory={setCat}
                    min={349}
                    max={900}
                    onPriceChange={setRange}
                />
                <div className={styles.container__Products}>
                    {
                        filtrados.map(
                            (p)=>(
                                <CardProducto id={p.id} name={p.name} price={p.price} urlImage={p.urlImage}/> 
                            )
                        )
                    }

                    

                </div>
            </section>

        </section>
    );
}