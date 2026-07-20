import styles from './StayReceipt.module.css'

import iconBarcodeUrl from '../../assets/images/icon-barcode.svg'

export const StayReceipt = () => {
    return (
        <article className={styles.card}>
            {/* Decorative paper-lines overlay */}
            <div className={styles.lines} aria-hidden='true'>
                {Array.from({ length: 13 }, (_, index) => (
                    <span key={index} className={styles.line} />
                ))}
            </div>

            {/* Header — horizontal: text block left, ref numbers right */}
            <header className={styles.header}>
                <div className={styles.headerText}>
                    <span className={styles.label}>Receipt</span>
                    <h2 className={styles.title}>Your stay</h2>
                </div>
                <div className={styles.refNumbers}>
                    <span className={styles.ref}>&#8470;&nbsp;MS-2026</span>
                    <span className={styles.ref}>0421-AH</span>
                </div>
            </header>

            {/* Check in / Check out */}
            <div className={styles.dates}>
                <div className={styles.dateBlock}>
                    <span className={styles.dateLabel}>Check in</span>
                    <div className={styles.dateDetails}>
                        <span className={styles.dateValue}>25 Apr</span>
                        <div className={styles.dateSupplementary}>
                            <span>Saturday</span>
                            <span className={styles.dateSep}>&middot;</span>
                            <span>15:00</span>
                        </div>
                    </div>
                </div>
                <div className={styles.dateBlock}>
                    <span className={styles.dateLabel}>Check out</span>
                    <div className={styles.dateDetails}>
                        <span className={styles.dateValue}>29 Apr</span>
                        <div className={styles.dateSupplementary}>
                            <span>Wednesday</span>
                            <span className={styles.dateSep}>&middot;</span>
                            <span>11:00</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Line items */}
            <div className={styles.lineItems}>
                <div className={styles.lineItem}>
                    <span className={styles.itemLabel}>Room &middot; La Garrigue &times; 4 nights</span>
                    <span className={styles.itemPrice}>&euro; 620.00</span>
                </div>
                <div className={styles.lineItem}>
                    <span className={styles.itemLabel}>Breakfast &times; 2 guests</span>
                    <span className={styles.itemPrice}>&euro; 96.00</span>
                </div>
                <div className={`${styles.lineItem} ${styles.lineItemDimmed}`}>
                    <span className={styles.itemLabel}>Tourist tax</span>
                    <span className={styles.itemPrice}>&euro; 14.40</span>
                </div>
            </div>

            {/* Total */}
            <div className={styles.total}>
                <span className={styles.totalLabel}>Total paid</span>
                <span className={styles.totalValue}>&euro; 730.40</span>
            </div>

            {/* Footer — horizontal: payment left, barcode right */}
            <footer className={styles.footer}>
                <span className={styles.payment}>Paid &middot; Wise &middot; GBP</span>
                <div className={styles.barcodeWrapper}>
                    <img src={iconBarcodeUrl} alt='' className={styles.barcode} />
                </div>
            </footer>
        </article>
    )
}
