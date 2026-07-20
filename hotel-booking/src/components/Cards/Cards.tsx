import iconKey from '../../assets/images/icon-key.svg'
import iconWifi from '../../assets/images/icon-wifi.svg'
import iconBreakfast from '../../assets/images/icon-breakfast.svg'
import styles from './Cards.module.css'

interface CardData {
    label: string
    number: string
    iconSrc: string
    overlayClass: string
    labelClass: string
    numberClass: string
    title: string
    subtitle: string
    instructions?: string
    wifi?: { network: string; password: string }
}

const CARD_DATA: CardData[] = [
    {
        label: 'Arrival',
        number: '01',
        iconSrc: iconKey,
        overlayClass: styles.overlayArrival,
        labelClass: styles.headerLabelArrival,
        numberClass: styles.headerNumberArrival,
        title: 'Check-in from 15:00',
        subtitle: 'Sat, 25 April',
        instructions:
            'Ring the brass bell by the blue door. If we\u2019re at the market, the key is in the terracotta pot by the olive tree.',
    },
    {
        label: 'Wifi',
        number: '02',
        iconSrc: iconWifi,
        overlayClass: styles.overlayWifi,
        labelClass: styles.headerLabelWifi,
        numberClass: styles.headerNumberWifi,
        title: 'Le Soleil \u00b7 Guest',
        subtitle: 'Password below',
        wifi: { network: 'Le Soleil \u00b7 Guest', password: 'soleil-2026' },
    },
    {
        label: 'Breakfast',
        number: '03',
        iconSrc: iconBreakfast,
        overlayClass: styles.overlayBreakfast,
        labelClass: styles.headerLabelBreakfast,
        numberClass: styles.headerNumberBreakfast,
        title: 'Served 8 \u2013 10:30',
        subtitle: 'On the terrace',
        instructions:
            'Fresh figs, Marseille honey, pain au levain, and espresso. Gluten-free option? Leave a note the night before.',
    },
]

export const Cards = () => {
    return (
        <section className={styles.cards} aria-label='Information cards'>
            {CARD_DATA.map((card) => (
                <article key={card.number} className={styles.card}>
                    <header className={styles.header}>
                        <div className={`${styles.overlay} ${card.overlayClass}`}>
                            <div className={styles.iconWrapper}>
                                <img className={styles.icon} src={card.iconSrc} alt='' aria-hidden='true' />
                            </div>
                        </div>
                        <span className={`${styles.headerLabel} ${card.labelClass}`}>{card.label}</span>
                        <span className={`${styles.headerNumber} ${card.numberClass}`}>{card.number}</span>
                    </header>

                    <div className={styles.details}>
                        <div className={styles.detailBlock}>
                            <p className={styles.detailTitle}>{card.title}</p>
                            <p className={styles.detailSubtitle}>{card.subtitle}</p>
                        </div>

                        {card.wifi ? (
                            <div className={styles.wifiInfo}>
                                <div className={styles.wifiRow}>
                                    <span className={styles.wifiLabel}>Network</span>
                                    <span className={styles.wifiValue}>{card.wifi.network}</span>
                                </div>
                                <div className={styles.wifiRow}>
                                    <span className={styles.wifiLabel}>Password</span>
                                    <div className={styles.passwordField}>
                                        <span className={styles.passwordValue}>{card.wifi.password}</span>
                                        <button className={styles.copyButton} type='button'>
                                            COPY
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <p className={styles.instructions}>{card.instructions}</p>
                        )}
                    </div>
                </article>
            ))}
        </section>
    )
}
