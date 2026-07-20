import { useCallback } from 'react'
import styles from './BookingHeader.module.css'

function generateICS(): string {
    const checkIn = '20260425'
    const checkOut = '20260429'
    const now = '20260720T000000Z'

    const escape = (text: string) => text.replace(/[\\;,]/g, '\\$&').replace(/\n/g, '\\n')

    return [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Maison Soleil//Hotel Booking//EN',
        'BEGIN:VEVENT',
        `DTSTART;VALUE=DATE:${checkIn}`,
        `DTEND;VALUE=DATE:${checkOut}`,
        `DTSTAMP:${now}`,
        `SUMMARY:${escape('Stay at Maison Soleil — La Garrigue')}`,
        `LOCATION:${escape('Maison Soleil, 12 Rue des Oliviers, Cassis')}`,
        `DESCRIPTION:${escape('Room: La Garrigue. Check-in from 15:00, check-out by 11:00.')}`,
        'END:VEVENT',
        'END:VCALENDAR',
    ].join('\r\n')
}

function downloadCalendar() {
    const ics = generateICS()
    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = 'maison-soleil-stay.ics'
    document.body.appendChild(anchor)
    anchor.click()
    document.body.removeChild(anchor)
    URL.revokeObjectURL(url)
}

export const BookingHeader = () => {
    const handlePrint = useCallback(() => {
        window.print()
    }, [])

    const handleCalendar = useCallback(() => {
        downloadCalendar()
    }, [])

    return (
        <header className={styles.header}>
            <div className={styles.headerInfo}>
                <p className={styles.status}>Booking · Confirmed</p>
                <h1 className={styles.heading}>
                    Bienvenue, <em className={styles.headingAccent}>Lucia.</em>
                </h1>
            </div>
            <div className={styles.actions}>
                <button type='button' className={styles.btnOutline} onClick={handlePrint}>
                    Print receipt
                </button>
                <button type='button' className={styles.btnFilled} onClick={handleCalendar}>
                    Add to calendar
                </button>
            </div>
        </header>
    )
}
