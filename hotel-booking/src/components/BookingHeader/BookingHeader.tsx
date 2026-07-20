import styles from './BookingHeader.module.css'

export const BookingHeader = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerInfo}>
                <p className={styles.status}>Booking · Confirmed</p>
                <h1 className={styles.heading}>Bienvenue, Lucia.</h1>
            </div>
            <div className={styles.actions}>
                <button type='button' className={styles.btnOutline}>
                    Print receipt
                </button>
                <button type='button' className={styles.btnFilled}>
                    Add to calendar
                </button>
            </div>
        </header>
    )
}
