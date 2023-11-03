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
    <section>
      <h1>Rick and Morty</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputLocation} />
        <button>Search</button>
      </form>

      {
        isLoading
          ? <h2>Loading...</h2>
          : hasError || locationId === '0'
            ? <h2>❌Hey! you must provide an id from 1 to 126</h2>
            : (<>
              <InfoLocation
                location={location}
              />
              <div>
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
      )}

    </section>
  )
}

export default App
