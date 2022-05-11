import React from 'react'
import { Link } from 'react-router-dom'
import PhotoComments from './PhotoComments'
import styles from './PhotoContent.module.css'

const PhotoContent = ({ data }) => {
  const { photo, comments } = data

  return (
    <section className={ styles.photo }>

      <article className={ styles.img }>
        <img src={ photo.src } alt={ photo.title }/> </article>

      <article className={ styles.details }>
        <div>
          <p className={ styles.author }>
            <Link to={ `/perfil/${photo.author}` }>@{ photo.author }</Link>
            <span className={ styles.visualizacoes }> {photo.acessos} </span>
          </p> 

          <h1 className='title'>
            <Link to={ `/foto/${photo.id}` }>{ photo.title }</Link>
          </h1>

          <ul className={ styles.attributes }>
            <li>{ photo.idade }anos</li>
            <li>{ photo.peso } kg</li>
          </ul>

        </div>
      </article>

      <PhotoComments id={ photo.id } comments={ comments }/>
    </section>
  )
}

export default PhotoContent
