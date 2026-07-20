import { WelcomeCard } from '../WelcomeCard/WelcomeCard'
import { StayReceipt } from '../StayReceipt/StayReceipt'
import styles from './BookingDocuments.module.css'
import iconSparkleUrl from '../../assets/images/icon-sparkle.svg'

export const BookingDocuments = () => {
    return (
        <section className={styles.section} aria-label='Booking documents'>
            <div className={styles.container}>
                <StayReceipt />
                <WelcomeCard />
            </div>
            <div className={styles.hint}>
                <span className={styles.hintIconWrapper}>
                    <img src={iconSparkleUrl} alt='' className={styles.hintIcon} />
                </span>
                <span className={styles.hintText}>hover to fan</span>
                <span className={styles.hintIconWrapper}>
                    <img src={iconSparkleUrl} alt='' className={styles.hintIcon} />
                </span>
            </div>
        </section>
    )
}
