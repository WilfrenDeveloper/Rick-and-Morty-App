import "./InfoLocation.css"

const InfoLocation = ({ location }) => {

  return (
    <article  className='Info__article'>
        <h2 className='Info__h2'>{location?.name}</h2>
        <ul className='Info__ul'>
            <li className='Info__li li1'><span className='Info__span--label'>Type:</span> <span className='Info__span--value'>{location?.type}</span></li>
            <li className='Info__li li2'><span className='Info__span--label'>Dimension:</span> <span className='Info__span--value'>{location?.dimension}</span></li>
            <li className='Info__li li3'><span className='Info__span--label'>Population:</span> <span className='Info__span--value'>{location?.residents.length} </span></li>
        </ul> 
    </article>  
  )
}

export default InfoLocation