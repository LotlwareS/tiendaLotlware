
type HeaderTituloProps = {
    titulo:string;
}

export default function SeccionHeaderTitulo({titulo}:HeaderTituloProps){

    return(
        <div className="SecHeaderTitulo-contenedor">
            <h1 className="Header-Titulo">{titulo}</h1>
        </div>
    );
}