import CardProducto from './CardProducto';
import HeaderTituloBtn from './HeaderTituloBtn';
import './index.css';


export interface Producto{
    
    id:number,
    name:string,
    urlImage:string,
    price:number
    
}

type SeccionProductosProps= {
    titulo?:string;
    textoBoton?: string;
    productos:Producto[];
    isLoading:boolean;
    emptyText?:string;
}

export default function SeccionProductos({
    titulo= 'Actualiza tu equipo',
    textoBoton = 'Ver todo',    
    productos = [],
    isLoading = false,
    emptyText = 'No hayaz productos disponibles'
}: SeccionProductosProps){

    return(
        <section className="seccionProductos">
            <HeaderTituloBtn 
                titulo={titulo}
                titulobtn={textoBoton}
            />
            
            <article className="seccionProductos__grid">
                { isLoading ? (
                        Array.from({length: 3}).map((_, i)=> (
                            <div className='card skeleton' key={`skeleton-${i}`}/>
                        ))
                    ): productos.length > 0 ? (
                        
                        productos.map((p) => (
                            <CardProducto 
                                id={p.id}
                                name={p.name}
                                urlImage={p.urlImage}
                                price={p.price} 
                            />
                        ))

                    ):(
                        <p className='seccionProductos_empty'>{emptyText}</p>
                    )

                }

                
            </article>
        </section>
    );
}