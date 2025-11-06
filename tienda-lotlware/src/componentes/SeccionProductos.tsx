import HeaderTituloBtn from './HeaderTituloBtn';
import './index.css';
const productos =[
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
]

export default function SeccionProductos(){

    return(
        <section className="seccionProductos">
            <HeaderTituloBtn titulo='Actualiza tu equipo' titulobtn='ver todo'/>
            
            <article className="seccionProductos__grid">
                {productos.map((p) => (
                    <figure className="card" key={p.id}>
                        <div className="card__imgWrap">
                            <img src={p.urlImage} alt={p.name} />
                            <span  className="card__badge">Oferta</span>
                        </div>

                        <figcaption className="card__content">
                            <span className="card__title">{p.name}</span>
                            <p className="card__price">${p.price.toLocaleString("es-MX", { minimumFractionDigits: 2 })}</p>
                            <button className="card__btn">Agregar</button>
                        </figcaption>
                    </figure>
                ))}
            </article>
        </section>
    );
}