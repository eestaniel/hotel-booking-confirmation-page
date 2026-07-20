import styles from './WelcomeCard.module.css'

import iconSunUrl from '../../assets/images/icon-sun.svg'

export const WelcomeCard = () => {
    return (
        <article className={styles.card}>
            <header className={styles.header}>
                <span className={styles.label}>Welcome card</span>
                <div className={styles.iconWrapper}>
                    <img src={iconSunUrl} alt='' className={styles.icon} />
                </div>
            </header>

            <div className={styles.content}>
                <div className={styles.message}>
                    <p className={styles.subtitle}>A note from your host,</p>
                    <p className={styles.hostName}>Margaux.</p>
                </div>

                <p className={styles.body}>
                    We&rsquo;re so glad you&rsquo;re coming. The shutters will be open, the lemonade cold, and the cat
                    &mdash; Poivre &mdash; pretending not to notice you.
                </p>
            </div>

            <div className={styles.room}>
                <span className={styles.roomLabel}>Room</span>
                <span className={styles.roomName}>La Garrigue</span>
            </div>
        </article>
    )
}
