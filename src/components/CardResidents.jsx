import { useEffect } from 'react'
import useFetch from '../hooks/useFetch'

const CardResidents = ({ url }) => {

  const [ resident, getResident] = useFetch(url)

  useEffect(() => {
    getResident()
  }, [])

  return (
    <article>
      <header>
        <img src={resident?.image} alt="imagen" />
        <div>
          <div className='circle'></div>
          <span>{resident?.status}</span>
        </div>
      </header>
      <section>
        <h3>{resident?.name}</h3>
        <hr />
        <ul>
        <li><span>Specie</span><span></span>{resident?.species}</li>
        <li><span>Origin</span><span></span>{resident?.origin.name}</li>
        <li><span>Eppisodes where appear</span><span>{resident?.episode.length}</span></li>
      </ul>
      </section>
    
    </article>
  )
}

export default CardResidents

/**
 * nombre
 * imagen
 * status del residente
 * Specie
 * Origin
 * 
 */