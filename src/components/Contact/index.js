import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            ></AnimatedLetters>
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
        </div>
        <div className="info-map">
          John Bricks Carsola,
          <br />
          Phs 8A, Pkg 11B, Blk 185, Lot 3,
          <br />
          Bagong Silang, Caloocan City,
          <br />
          Metro Manila, Philippines
          <br />
          <span>johnbrickscarsola09@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[14.781475776734851, 121.04737404256969]} zoom={20}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
            <Marker position={[14.781475776734851, 121.04737404256969]}>
              <Popup>Bricks lives here, come over for a cup of coffee.</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman"></Loader>
    </>
  )
}

export default Contact
