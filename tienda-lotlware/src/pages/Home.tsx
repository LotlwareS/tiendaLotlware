import BannerBienvenida from "../componentes/BannerBienvenida";
import SeccionCategorias from "../componentes/SeccionCategorias";
import SeccionContacto from "../componentes/SeccionContacto";
import SeccionOfertas from "../componentes/SeccionOfertas";
import SeccionProductos from "../componentes/SeccionProductos";
import SeccionPublicidad from "../componentes/SeccionPublicidad";

export default function Home(){

    return(
        <>
            <BannerBienvenida/>
            <SeccionProductos/>
            <SeccionOfertas/>
            <SeccionCategorias/>
            <SeccionProductos/>
            <SeccionPublicidad/>
            <SeccionProductos/>
            <SeccionContacto/>            
        
        </>
    );
}