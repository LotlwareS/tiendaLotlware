import BtnCompra from "./BtnCompra";

type CardPublicidadProps = {
    textoheader:string;
    title:string;
    subtitle:string;
}


export default function CardPublicidad({textoheader,title,subtitle}:CardPublicidadProps){
    return(
        
        <div className="cuadroTexto1__card">
            <span className="cuadroTexto1__eyebrow">{textoheader}</span>
            <h1 className="cuadroTexto1__title">
                {title}
            </h1>
            <p className="cuadroTexto1__subtitle">{subtitle}</p>

            <BtnCompra name='Comprar Ahora'/>                        
        </div>
        
    );
}