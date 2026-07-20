import iconKey from '../../assets/images/icon-key.svg'
import iconWifi from '../../assets/images/icon-wifi.svg'
import iconBreakfast from '../../assets/images/icon-breakfast.svg'
import styles from './Cards.module.css'

export const Cards = () => {
    return (
        <section className={styles.cards} aria-label='Information cards'>
            {/* Card 1 — Arrival */}
            <article className={styles.card}>
                <header className={styles.header}>
                    <div className={`${styles.overlay} ${styles.overlayArrival}`}>
                        <div className={styles.iconWrapper}>
                            <img className={styles.icon} src={iconKey} alt='' aria-hidden='true' />
                        </div>
                    </div>
                    <span className={`${styles.headerLabel} ${styles.headerLabelArrival}`}>Arrival</span>
                    <span className={`${styles.headerNumber} ${styles.headerNumberArrival}`}>01</span>
                </header>
                <div className={styles.details}>
                    <div className={styles.detailBlock}>
                        <p className={styles.detailTitle}>Check-in from 15:00</p>
                        <p className={styles.detailSubtitle}>Sat, 25 April</p>
                    </div>
                    <p className={styles.instructions}>
                        Ring the brass bell by the blue door. If we&rsquo;re at the market, the key is in the terracotta
                        pot by the olive tree.
                    </p>
                </div>
            </article>

            {/* Card 2 — Wifi */}
            <article className={styles.card}>
                <header className={styles.header}>
                    <div className={`${styles.overlay} ${styles.overlayWifi}`}>
                        <div className={styles.iconWrapper}>
                            <img className={styles.icon} src={iconWifi} alt='' aria-hidden='true' />
                        </div>
                    </div>
                    <span className={`${styles.headerLabel} ${styles.headerLabelWifi}`}>Wifi</span>
                    <span className={`${styles.headerNumber} ${styles.headerNumberWifi}`}>02</span>
                </header>
                <div className={styles.details}>
                    <div className={styles.detailBlock}>
                        <p className={styles.detailTitle}>Le Soleil &middot; Guest</p>
                        <p className={styles.detailSubtitle}>Password below</p>
                    </div>
                    <div className={styles.wifiInfo}>
                        <div className={styles.wifiRow}>
                            <span className={styles.wifiLabel}>Network</span>
                            <span className={styles.wifiValue}>Le Soleil &middot; Guest</span>
                        </div>
                        <div className={styles.wifiRow}>
                            <span className={styles.wifiLabel}>Password</span>
                            <div className={styles.passwordField}>
                                <span className={styles.passwordValue}>soleil-2026</span>
                                <button className={styles.copyButton} type='button'>
                                    COPY
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            {/* Card 3 — Breakfast */}
            <article className={styles.card}>
                <header className={styles.header}>
                    <div className={`${styles.overlay} ${styles.overlayBreakfast}`}>
                        <div className={styles.iconWrapper}>
                            <img className={styles.icon} src={iconBreakfast} alt='' aria-hidden='true' />
                        </div>
                    </div>
                    <span className={`${styles.headerLabel} ${styles.headerLabelBreakfast}`}>Breakfast</span>
                    <span className={`${styles.headerNumber} ${styles.headerNumberBreakfast}`}>03</span>
                </header>
                <div className={styles.details}>
                    <div className={styles.detailBlock}>
                        <p className={styles.detailTitle}>Served 8 &ndash; 10:30</p>
                        <p className={styles.detailSubtitle}>On the terrace</p>
                    </div>
                    <p className={styles.instructions}>
                        Fresh figs, Marseille honey, pain au levain, and espresso. Gluten-free option? Leave a note the
                        night before.
                    </p>
                </div>
            </article>
        </section>
    )
}
