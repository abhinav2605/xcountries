import styles from "./Card.module.css";

function Card({data}){
    return (<div className={styles.card}>
        <img className={styles.flagImage} src={data.flags.png} alt="image" />
        <p>{data.name.common}</p>

    </div>)
}

export default Card;