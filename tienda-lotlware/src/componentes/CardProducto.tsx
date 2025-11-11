//import styles from "./CardProducto.module.css"
type CardProductoProps = {
    id:number;
    name:string;
    urlImage:string;
    price:number;
}

export default function CardProducto({id, name, urlImage,price}:CardProductoProps){

    return(
        <figure className="card" key={id}>
            <div className="card__imgWrap">
                <img src={urlImage} alt={name} />
                {/* <span  className="card__badge">Oferta</span> */}
            </div>

            <figcaption className="card__content">
                <span className="card__title">{name}</span>
                <p className="card__price">${price.toLocaleString("es-MX", { minimumFractionDigits: 2 })}</p>
                <button className="card__btn">Agregar</button>
            </figcaption>
        </figure>
    );
}