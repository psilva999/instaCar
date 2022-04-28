import React from 'react'
import styles from './Button.module.css'

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <div className={ styles.wrapper }>
      <label htmlFor={ name } className={ styles.label }>{ label }</label>
      <input 
        className={ styles.input } 
        type={ type }

        id={ name }
        name={ name }

        onChange={onChange}
        value={ value }
        onBlur={ onBlur }
      />

      {error && <span className={ styles.error }>{ error }</span>} 
    </div>
  )
}

export default Input
