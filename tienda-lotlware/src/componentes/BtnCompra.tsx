
type BtnCompraProps = {
    name:string;
}

export default function BtnCompra({name}:BtnCompraProps){

    return(
        <button className="oferta__btn" type="button">
            {name}
        </button>
    );
}