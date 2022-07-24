import styles from './Card.module.scss';

const Card = ({label, heading, descr}) =>{
    return(
        <>
        <div className={styles.Card}>
            <div className="Card Row">
            <p className={styles.label}>{label}</p>
            </div>
            <h5>{heading}</h5>
            <p>{descr}</p>
        </div>
        
        </>
    );
}
export default Card;