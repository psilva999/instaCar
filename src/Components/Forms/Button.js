import React from 'react'
import styles from './Input.module.css'

const Button = ({ children, ...props }) => {
  return (
    <button className={styles.button} { ...props }>
      { children }
    </button>
  )
}

export default Button
