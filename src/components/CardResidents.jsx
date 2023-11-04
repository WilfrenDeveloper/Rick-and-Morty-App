import { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import "./CardResidents.css"

const CardResidents = ({ url }) => {

  const [resident, getResident] = useFetch(url)

  useEffect(() => {
    getResident()
  }, [])

  return (
    <article className='Card__article'>
      <header className='Card__header'>
        <img className='Card__img' src={resident?.image} alt="imagen" />
        <div className='Card__div'>
          <div className={`Card__circle ${resident?.status}`}></div>
          <span className='Card__div--span'>{resident?.status}</span>
        </div>
      </header>
      <section className='Card__section'>
        <h3 className='Card__h3'>{resident?.name}</h3>
        <hr className='Card__hr'/>
        <ul className='Card__ul'>
          <li className='Card__li'><span  className='Card__span--label'>Specie</span><span  className='Card__span--value'>{resident?.species}</span></li>
          <li className='Card__li'><span  className='Card__span--label'>Origin</span><span  className='Card__span--value'>{resident?.origin.name}</span></li>
          <li className='Card__li'><span  className='Card__span--label'>Eppisodes where appear</span><span  className='Card__span--value'>{resident?.episode.length}</span></li>
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