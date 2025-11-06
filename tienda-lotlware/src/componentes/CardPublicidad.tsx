import BtnCompra from "./BtnCompra";

type CardPublicidadProps = {
    textoheader:string;
    title:string;
    subtitle:string;
}


export default function CardPublicidad({textoheader,title,subtitle}:CardPublicidadProps){
    return(
        
        <div className="hero__card">
            <span className="hero__eyebrow">{textoheader}</span>
            <h1 className="hero__title">
                {title}
            </h1>
            <p className="hero__subtitle">{subtitle}</p>

            <BtnCompra name='Comprar Hora'/>                        
        </div>
        
    );
}