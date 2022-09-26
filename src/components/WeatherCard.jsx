import React, { useState } from 'react'

const WeatherCard = ({weather, temperature}) => {
    const [isCelsius, setIsCelsius] = useState(true)

    const ChangeTemperature = () => setIsCelsius(!isCelsius)
  return (
    <article className='card'>
        <h1 className='card__title'>Weather App</h1>
        <h2 className='card__subtitle'>{`${weather?.name}, ${weather?.sys.country}`}</h2>
        <main className='card__main'>
        <section className='card__section'>
            <img className='card__image' src={weather && `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="weather icon" />
            <h3 className='card__temperature'>{isCelsius ? `${temperature?.celsius} °C` : `${temperature?.farenheit} °F`}</h3>            
        </section>
        <section className='card__section'>
            <h2 className='card__description'>"{weather?.weather[0].description}"</h2>
            <ul className='card__item'>
                <li className='card__list'><span className='card__span'>Wind spped</span> {weather?.wind.speed}m/s</li>
                <li className='card__list'><span className='card__span'>Clouds</span> {weather?.clouds.all}%</li>
                <li className='card__list'><span className='card__span'>Pressure</span> {weather?.main.pressure}hPa</li>
            </ul>
        </section>
        </main>
        <button className='card__btn' onClick={ChangeTemperature}>{isCelsius ? 'Change to °F' : 'Change to °C'}</button>
    </article>
  )
}

export default WeatherCard