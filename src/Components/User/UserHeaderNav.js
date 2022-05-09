import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import { UserContext } from '../../UserContext.js'
import useMedia from '../../Hooks/useMedia.js'
import styles from './UserHeaderNav.module.css'

import { ReactComponent as MinhasFotos} from '../../Assets/image.svg'
import {ReactComponent as Stats} from '../../Assets/stats.svg'

import {ReactComponent as AddPhoto} from '../../Assets/add.svg'
import {ReactComponent as Logout} from '../../Assets/logout.svg'

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext),
        mobile = useMedia('(max-width:35rem)')
        
  const [mobileMenu, setMobileMenu] = React.useState(false),
        { pathname } = useLocation('')

  React.useEffect(() => {
    setMobileMenu(false)
  }, [pathname])

  return (
    <>
      { mobile && (  
      <button 
        aria-label='Menu' 
        className={`${styles.mobileButton} ${mobileMenu &&styles.mobileButtonActive}`}
        onClick={() => setMobileMenu(!mobileMenu)}>
          
      </button> )}

      <nav 
        className={ 
          `${mobile ? styles.navMobile : styles.nav} 
           ${mobileMenu && styles.navMobileActive}`
        }>
        <NavLink to='/conta' end>
          <MinhasFotos/>
          { mobile && 'Minhas fotos' }
        </NavLink>

        <NavLink to='/conta/estatisticas'>
          <Stats/>
          { mobile && 'Estatísticas' }
        </NavLink>

        <NavLink to='/conta/postar'>
          <AddPhoto/>
          { mobile && 'Adicionar foto' }
        </NavLink>

        <button onClick={ userLogout }>
          <Logout/>
          { mobile && 'Sair' }
        </button>
      </nav>
    </>
  )
}

export default UserHeaderNav