import './index.css';

type HeaderTituloBtnProps = {
    titulo:string;
    titulobtn:string
}

export default function HeaderTituloBtn({titulo, titulobtn}: HeaderTituloBtnProps){

    return(
        <div className="TituloBtn__header">
            <h1>{titulo}</h1>
            <button className="TituloBtn__Button">{titulobtn}</button>
        </div>
    );
}