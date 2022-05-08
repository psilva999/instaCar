import React from 'react'
import { NavLink } from 'react-router-dom'

import { UserContext } from '../../UserContext.js'
import styles from './UserHeaderNav.module.css'

import { ReactComponent as MinhasFotos} from '../../Assets/image.svg'
import {ReactComponent as Stats} from '../../Assets/stats.svg'

import {ReactComponent as AddPhoto} from '../../Assets/add.svg'
import {ReactComponent as Logout} from '../../Assets/logout.svg'

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null),
        { userLogout } = React.useContext(UserContext)

  return (
    <nav className={ styles.nav }>
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
  )
}

export default UserHeaderNav