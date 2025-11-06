import SeccionHeaderTitulo from "./SeccionHeaderTitulo";
import './index.css';

const categorias = [
    {
        id:1,
        name:"consolosas",
        urlImage:"https://pub-59ece35300204c2d91a5977706ecf479.r2.dev/consola.jpg"
    },{
        id:2,
        name:"Controles",
        urlImage:"https://pub-59ece35300204c2d91a5977706ecf479.r2.dev/descarga.jfif"
    },{
        id:3,
        name:"Accesorios",
        urlImage:"https://pub-59ece35300204c2d91a5977706ecf479.r2.dev/Setup%20Gamer%20Minimalista.jfif"
    },
]


export default function SeccionCategorias(){

    return(
        <section className="SeccionCategorias">
            <SeccionHeaderTitulo titulo="Categorias"/>
            <div className="categorias-contenedor">
                {categorias.map((c)=>(
                    <figure className="imgcard imgcard--overlay" key={c.id}>
                        <img
                            src={c.urlImage}
                            alt={c.name}
                            loading="lazy"
                        />
                        <figcaption className="imgcard__caption">
                            <span className="imgcard__title">{c.name}</span>
                            
                        </figcaption>
                    </figure>
                ))}
            </div>
        
        </section>
    );
}