import './index.css';
import styles from "./CardImage.module.css"
type CardImageProps = {
    src:string;
    alt:string
}

export default function CardImage({src, alt}:CardImageProps){

    return(
        <>
            <figure className={styles.imgcard}>
                <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                />
            </figure>
        </>
    );
}



/*
src="https://pub-59ece35300204c2d91a5977706ecf479.r2.dev/imgBaner.jpg"
                    alt="Cyber Kid"

*/