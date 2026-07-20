import { WelcomeCard } from '../WelcomeCard/WelcomeCard'
import { StayReceipt } from '../StayReceipt/StayReceipt'
import { DecorativeIcon } from '../DecorativeIcon/DecorativeIcon'
import styles from './BookingDocuments.module.css'
import iconSparkleUrl from '../../assets/images/icon-sparkle.svg'
import illustrationSunUrl from '../../assets/images/illustration-sun.svg'

export const BookingDocuments = () => {
    return (
        <section className={styles.section} aria-label='Booking documents'>
            <div className={styles.container}>
                <StayReceipt />
                <div className={styles.sunWrapper} aria-hidden='true'>
                    <img src={illustrationSunUrl} alt='' className={styles.sunIllustration} />
                </div>
                <WelcomeCard />
            </div>
            <div className={styles.hint}>
                <DecorativeIcon
                    src={iconSparkleUrl}
                    wrapperClassName={styles.hintIconWrapper}
                    iconClassName={styles.hintIcon}
                />
                <span className={styles.hintText}>hover to fan</span>
                <DecorativeIcon
                    src={iconSparkleUrl}
                    wrapperClassName={styles.hintIconWrapper}
                    iconClassName={styles.hintIcon}
                />
            </div>
        </section>
    )
}
