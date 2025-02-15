import { useState } from 'react'
import HamburgerButton from './HamburgerButton'
import NavList from './NavList'
import styles from './index.module.css'

export default function MobileNav() {
    //Here I used Compound components design pattern with lifting the state up technique to share 
    // the 'isActiveHamburgerButton' state
    const [isActiveHamburgerButton, setIsActiveHamburgerButton] = useState<boolean>(false)

    return (
        <header className={styles['mobile-nav']}>
            <HamburgerButton 
                isActiveHamburgerButton={isActiveHamburgerButton}  
                setIsActiveHamburgerButton={setIsActiveHamburgerButton} 
            />  
            <NavList 
                isActiveHamburgerButton={isActiveHamburgerButton}  
                setIsActiveHamburgerButton={setIsActiveHamburgerButton} 
            />
        </header>
    )
}