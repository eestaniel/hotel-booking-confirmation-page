import { BookingHeader } from '../components/BookingHeader/BookingHeader'
import { BookingDocuments } from '../components/BookingDocuments/BookingDocuments'
import { Cards } from '../components/Cards/Cards'
import styles from '../styles/pages/Home.module.css'

export const Home = () => {
    return (
        <main className={styles.main}>
            <BookingHeader />
            <BookingDocuments />
            <Cards />
        </main>
    )
}
