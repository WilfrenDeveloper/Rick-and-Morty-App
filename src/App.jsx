import { useEffect, useRef, useState } from 'react'
import useFetch from './hooks/useFetch';
import InfoLocation from './components/InfoLocation';
import CardResidents from './components/CardResidents';
import "./App.css"


function App() {

  const [locationId, setLocationId] = useState(Math.floor(Math.random() * 126) + 1)

  const url = `https://rickandmortyapi.com/api/location/${locationId}`
  const [location, getLocation, isLoading, hasError] = useFetch(url)

  useEffect(() => {
    getLocation()
  }, [locationId])

  const inputLocation = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    setLocationId(inputLocation.current.value.trim())
  }



  return (
    <>
      <figure className='App__figure'>
        <img className='App__img' src="https://islideusa.com/cdn/shop/collections/Rick_and_Morty_Collection_Header_1600x.progressive.png.jpg?v=1624448995" alt="Rick and Morty" />
      </figure>
      <div className='container'>
        <section className='App__section'>
          <form className='App__form' onSubmit={handleSubmit}>
            <input className='App__input' type="text" ref={inputLocation} />
            <button className='App__button'>Search</button>
          </form>

          {
            isLoading
              ? <h2 className='App__loading'>Loading...</h2>
              : hasError || locationId === '0'
                ? <h2 className='App__error'>❌Hey! you must provide an id from 1 to 126</h2>
                : (<>
                  <InfoLocation
                    location={location}
                  />
                  <div className='App__div'>
                    {
                      location?.residents.map(url => (
                        <CardResidents
                          key={url}
                          location={location}
                          url={url}
                        />
                      ))
                    }
                  </div>
                </>
                )
          }

        </section>
      </div>
    </>
  )
}

export default App
