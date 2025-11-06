import './index.css';

type HeaderTituloBtnProps = {
    titulo:string;
    titulobtn:string
}

export default function HeaderTituloBtn({titulo, titulobtn}: HeaderTituloBtnProps){

    return(
        <div className="seccionProductos__header">
            <h1>{titulo}</h1>
            <button className="seccionProductos__verTodo">{titulobtn}</button>
        </div>
    );
}