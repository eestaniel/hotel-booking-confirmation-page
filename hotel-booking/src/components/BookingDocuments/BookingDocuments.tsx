import { WelcomeCard } from '../WelcomeCard/WelcomeCard'
import { StayReceipt } from '../StayReceipt/StayReceipt'
import styles from './BookingDocuments.module.css'

export const BookingDocuments = () => {
    return (
        <section className={styles.section} aria-label='Booking documents'>
            <div className={styles.container}>
                <StayReceipt />
                <WelcomeCard />
            </div>
        </section>
    )
}
