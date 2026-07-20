import { useState, useRef, useEffect, useCallback, type ComponentPropsWithoutRef } from 'react'
import styles from './SiteNavigation.module.css'

import logoUrl from '../../assets/images/logo.svg'
import iconBedUrl from '../../assets/images/icon-bed.svg'
import iconHouseUrl from '../../assets/images/icon-house.svg'
import iconPinUrl from '../../assets/images/icon-pin.svg'
import iconBreakfastOutlineUrl from '../../assets/images/icon-breakfast-outline.svg'
import iconMailUrl from '../../assets/images/icon-mail.svg'
import iconMenuUrl from '../../assets/images/icon-menu.svg'
import iconCloseUrl from '../../assets/images/icon-close.svg'
import iconWeatherUrl from '../../assets/images/icon-weather.svg'

interface NavItem {
    label: string
    iconSrc: string
    href: string
    badge?: number
    isActive?: boolean
}

const NAV_ITEMS: NavItem[] = [
    { label: 'Your stay', iconSrc: iconBedUrl, href: '#your-stay', badge: 1, isActive: true },
    { label: 'The house', iconSrc: iconHouseUrl, href: '#the-house' },
    { label: 'Around town', iconSrc: iconPinUrl, href: '#around-town' },
    { label: 'Breakfast', iconSrc: iconBreakfastOutlineUrl, href: '#breakfast' },
    { label: 'Messages', iconSrc: iconMailUrl, href: '#messages' },
]

function Logo() {
    return (
        <a href='#' className={styles.logo} aria-label='Maison Soleil home'>
            <img src={logoUrl} alt='' className={styles.logoImage} />
        </a>
    )
}

function PrimaryNav() {
    return (
        <nav className={styles.nav} aria-label='Primary navigation'>
            <ul className={styles.navList}>
                {NAV_ITEMS.map((item) => (
                    <li key={item.label} className={styles.navItem}>
                        <a
                            href={item.href}
                            className={`${styles.navLink} ${item.isActive ? styles.navLinkActive : ''}`}
                            aria-current={item.isActive ? 'page' : undefined}
                        >
                            <span className={styles.navIconWrapper}>
                                <img src={item.iconSrc} alt='' className={styles.navIcon} />
                            </span>
                            <span className={styles.navLabel}>{item.label}</span>
                            {item.badge !== undefined && (
                                <span className={styles.badge} aria-label={`${item.badge} notification`}>
                                    {item.badge}
                                </span>
                            )}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.weatherCard}>
                <div className={styles.weatherIconWrapper}>
                    <img src={iconWeatherUrl} alt='' className={styles.weatherIcon} />
                </div>
                <p className={styles.weatherLocation}>Today in Cassis</p>
                <p className={styles.weatherTemp}>27°</p>
                <p className={styles.weatherDesc}>Sunny · light breeze</p>
            </div>
            <div className={styles.footerInfo}>
                <p className={styles.footerLine}>Est. 1987</p>
                <p className={styles.footerLine}>Maison Soleil &middot; 12 Rue des Oliviers &middot; Cassis</p>
                <p className={styles.footerLine}>&copy; 2026 Maison Soleil</p>
            </div>
        </div>
    )
}

function NavigationPanelContent() {
    return (
        <div className={styles.navPanel}>
            <PrimaryNav />
            <Footer />
        </div>
    )
}

function SidebarHeader() {
    return (
        <div className={styles.sidebarHeader}>
            <Logo />
            <div className={styles.sidebarDivider} aria-hidden='true' />
            <PrimaryNav />
        </div>
    )
}

function AppBar({
    onMenuClick,
    menuOpen,
    menuButtonRef,
}: {
    onMenuClick: () => void
    menuOpen: boolean
    menuButtonRef: React.RefObject<HTMLButtonElement | null>
}) {
    return (
        <header className={styles.appBar}>
            <Logo />
            <button
                ref={menuButtonRef}
                type='button'
                className={styles.menuButton}
                onClick={onMenuClick}
                aria-expanded={menuOpen}
                aria-controls='mobile-nav-drawer'
                aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
                <span className={styles.menuIconWrapper}>
                    <img src={menuOpen ? iconCloseUrl : iconMenuUrl} alt='' className={styles.menuIcon} />
                </span>
            </button>
        </header>
    )
}

function MobileDrawer({
    open,
    onClose,
    menuButtonRef,
}: {
    open: boolean
    onClose: () => void
    menuButtonRef: React.RefObject<HTMLButtonElement | null>
}) {
    const drawerRef = useRef<HTMLDivElement>(null)
    const closeButtonRef = useRef<HTMLButtonElement>(null)
    const previousFocusRef = useRef<HTMLElement | null>(null)

    const getFocusableElements = useCallback((): HTMLElement[] => {
        if (!drawerRef.current) return []
        const elements = drawerRef.current.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        )
        return Array.from(elements)
    }, [])

    const trapFocus = useCallback(
        (e: KeyboardEvent) => {
            if (e.key !== 'Tab') return
            const focusable = getFocusableElements()
            if (focusable.length === 0) return

            const first = focusable[0]
            const last = focusable[focusable.length - 1]

            if (e.shiftKey) {
                if (document.activeElement === first) {
                    e.preventDefault()
                    last.focus()
                }
            } else {
                if (document.activeElement === last) {
                    e.preventDefault()
                    first.focus()
                }
            }
        },
        [getFocusableElements],
    )

    useEffect(() => {
        if (open) {
            previousFocusRef.current = document.activeElement as HTMLElement
            document.body.classList.add('body-lock')

            const handleKeyDown = (e: KeyboardEvent) => {
                if (e.key === 'Escape') {
                    onClose()
                    return
                }
                trapFocus(e)
            }

            document.addEventListener('keydown', handleKeyDown)

            // Move focus to close button after render
            requestAnimationFrame(() => {
                closeButtonRef.current?.focus()
            })

            return () => {
                document.removeEventListener('keydown', handleKeyDown)
                document.body.classList.remove('body-lock')
            }
        } else {
            document.body.classList.remove('body-lock')
        }
    }, [open, onClose, trapFocus])

    // Return focus to menu button when drawer closes
    useEffect(() => {
        if (!open && previousFocusRef.current) {
            previousFocusRef.current = null
            // Small delay to ensure DOM is settled
            requestAnimationFrame(() => {
                menuButtonRef.current?.focus()
            })
        }
    }, [open, menuButtonRef])

    if (!open) return null

    return (
        <div className={styles.drawerOverlay} onClick={onClose}>
            <div
                id='mobile-nav-drawer'
                ref={drawerRef}
                className={styles.drawer}
                role='dialog'
                aria-modal='true'
                aria-label='Navigation menu'
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles.drawerHeader}>
                    <Logo />
                    <button
                        ref={closeButtonRef}
                        type='button'
                        className={styles.drawerCloseButton}
                        onClick={onClose}
                        aria-label='Close navigation menu'
                    >
                        <span className={styles.menuIconWrapper}>
                            <img src={iconCloseUrl} alt='' className={styles.menuIcon} />
                        </span>
                    </button>
                </div>
                <hr className={styles.drawerDivider} />
                <div className={styles.drawerContent}>
                    <NavigationPanelContent />
                </div>
            </div>
        </div>
    )
}

function DesktopSidebar() {
    return (
        <aside className={styles.sidebar}>
            <SidebarHeader />
            <Footer />
        </aside>
    )
}

export function SiteNavigation({ children }: ComponentPropsWithoutRef<'div'>) {
    const [drawerOpen, setDrawerOpen] = useState(false)
    const menuButtonRef = useRef<HTMLButtonElement>(null)
    const backgroundRef = useRef<HTMLDivElement>(null)

    const openDrawer = () => setDrawerOpen(true)
    const closeDrawer = () => setDrawerOpen(false)

    // Close drawer when resizing across the desktop breakpoint
    useEffect(() => {
        const mql = window.matchMedia('(min-width: 1024px)')
        const handler = (e: MediaQueryListEvent) => {
            if (e.matches) {
                setDrawerOpen(false)
            }
        }
        mql.addEventListener('change', handler)
        return () => mql.removeEventListener('change', handler)
    }, [])

    // Toggle inert on background content when drawer is open
    useEffect(() => {
        const el = backgroundRef.current
        if (!el) return
        if (drawerOpen) {
            el.setAttribute('inert', '')
        } else {
            el.removeAttribute('inert')
        }
    }, [drawerOpen])

    return (
        <div className={styles.shell}>
            <DesktopSidebar />

            <div ref={backgroundRef} className={styles.background}>
                <div className={styles.mobileHeader}>
                    <AppBar
                        onMenuClick={() => (drawerOpen ? closeDrawer() : openDrawer())}
                        menuOpen={drawerOpen}
                        menuButtonRef={menuButtonRef}
                    />
                </div>

                <div className={styles.content}>{children}</div>
            </div>

            <MobileDrawer open={drawerOpen} onClose={closeDrawer} menuButtonRef={menuButtonRef} />
        </div>
    )
}
