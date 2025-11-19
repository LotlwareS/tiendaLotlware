import React, { useMemo, useState } from "react";
import styles from "./FilterSidebar.module.css"

type Props = {
    categorias?:string[];
    selectedCategory?:string;
    onSelectCategory?: (cat:string)=>void;
    min?:number;
    max?:number;
    onPriceChange?:(range:{min:number; max: number})=>void;
}

export default function FilterSidebar(
    {
        categorias=["Todos","Consolas","Juegos","Controles","Accesorios", "Ofertas", "Mas Vendidos"],
        selectedCategory = "Todos",
        onSelectCategory,
        min=150,
        max=900,
        onPriceChange
    }:Props
){
    const [minV, setMInV] = useState(min);
    const [maxV, setMaxV] = useState(max)

    const clamp = (v:number, lo:number, hi:number) => Math.min(Math.max(v, lo),hi);
    const fmt =(n:number) =>
        new Intl.NumberFormat("es-MX",{style: "currency", currency: "MXN", maximumFractionDigits:0}).format(n);

    // ancho util para el gradiente

    const trackStyle = useMemo(()=>{
        
        const p1 = ((minV - min)/(max - min))*100;
        const p2 = ((maxV - min)/ (max - min))*100;
        return{"--reangeStar": `${p1}%`, "--rangeEnd": `${p2}%`} as React.CSSProperties
    },[minV, maxV,min,max]
    );

    return(
        <aside className={styles.sidebar}>
            <h3 className={styles.title}>Filtar por</h3>
            <hr className={styles.hr} />
            <ul className={styles.list}>
                {
                    categorias.map((cat)=>{
                        const active = cat === selectedCategory;
                        return(
                            <li key={cat}>
                                <button className={`${styles.item} ${active ? styles.itemActive:""}`}
                                    onClick={()=> onSelectCategory?.(cat)}
                                    type="button"
                                >{cat}</button>
                            </li>
                        );
                    })
                }

            </ul>
            <hr className={styles.hr}/>

            <div className={styles.priceHead}>
                <span >Precio</span>
                <span className={styles.minus}>-</span>

            </div>

            <div className={styles.rangeWrap} style={trackStyle}>
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={minV}
                    onChange={(e)=>{
                        const v = Number(e.target.value);
                        const nv = clamp(v,min,maxV-1);
                        setMInV(nv);
                        onPriceChange?.({min: nv, max: maxV});

                    }}
                    className={`${styles.range} ${styles.rangeMin}`}
                
                />

                <input
                    type="range"
                    min={min}
                    max={max}
                    value={maxV}
                    onChange={(e) => {
                        const v = Number(e.target.value);
                        const nv = clamp(v, minV + 1, max);
                        setMaxV(nv);
                        onPriceChange?.({ min: minV, max: nv });
                    }}
                    className={`${styles.range} ${styles.rangeMax}`}
                />
            </div>

            <div className={styles.priceLabels}>
                <span>{fmt(minV)}</span>
                <span>{fmt(maxV)}</span>
            </div>
        </aside>
    )
}