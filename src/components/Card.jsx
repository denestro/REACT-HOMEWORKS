import styles from "./Card.module.css"

export const Card = ({title, dsc,img,butt,link}) => {
  return (
    <div className={styles.card}>
        <img src={img} alt="img" className={styles.img} />
      <h1>{title}</h1>
      <button onClick={() => window.location.href= link}>{butt}</button>
      <p>{dsc}</p>
    </div>
  )
}


