import styles from "./BtnCompra.module.css"

type BtnCompraProps = {
    name:string;
}

export default function BtnCompra({name}:BtnCompraProps){

    return(
        <button className={styles.oferta__btn} type="button">
            {name}
        </button>
    );
}