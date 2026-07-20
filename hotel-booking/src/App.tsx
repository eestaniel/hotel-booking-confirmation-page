import { Home } from './pages/home/Home'
import { SiteNavigation } from './components/SiteNavigation/SiteNavigation'
import styles from './App.module.css'

export const App = () => {
    return (
        <div className={styles.app}>
            <SiteNavigation>
                <Home />
            </SiteNavigation>
        </div>
    )
}

export default App
