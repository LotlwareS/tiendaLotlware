import styles from "./BannerHeader.module.css"
//import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export default function BannerHeader(){

    

    return (
    <div className={styles.BannerHeader}>
      {/* Fila 1: Título + Ordenar por */}
        <div className={styles.headerRow}>
            <h1>LO MEJOR PARA TI</h1>            
        </div>

      {/* Fila 2: Filtrar por (opcional) */}
        <div className={styles.container}>            
          <div className={styles.selectWrap}>
            <select className={styles.select} defaultValue="" >                
              <option value="" disabled>
              Ordenar por
              </option>
              <option value="relevancia">Ofertas</option>
              <option value="precio_asc">Juegos</option>
              <option value="precio_desc">Consolas</option>
              <option value="novedades">Accesorios</option>
            </select>
          </div>
        </div>
    </div>
  );
}