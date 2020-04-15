import React, { useState } from 'react'
import './daily.css'

const DailyForecast = (props) => {

    const [day, setDay] = useState(0);

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const handleClick = async (e) => {
        setDay(e.currentTarget.getAttribute("id"))
        console.log(props.data[day])
    }

    return (
        <div>
            <h1 className="WeeklyTitle">Your Weekly Forecast</h1>
            <div className="dailyWrapper">
                <div className="card-group">
                    {props.data.map((item, id) => (
                        <div className="card-body DailyCard" id={[id]} onClick={handleClick} key={id}>
                            <h5 className="card-title">{days[(new Date(item.dt * 1000).getDay())]}</h5>
                            <div><img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="Weather Icon"></img></div>
                        </div>))}
                </div>
                <div className="ListContainer">
                    <div className="card" id="DailyForecastCard">
                        <div className="card-header">
                            Your {days[(new Date(props.data[day].dt * 1000).getDay())]} Forecast
                            </div>
                        <ul className="list-group ">
                            <li className="list-group-item">The High is {Math.round(props.data[day].temp.max)} ℉</li>
                            <li className="list-group-item">The Low is {Math.round(props.data[day].temp.min)} ℉</li>
                            <li className="list-group-item">The Humidity will be {props.data[day].humidity}%</li>
                            <li className="list-group-item">The Top wind speed will be {Math.round(props.data[day].wind_speed)} MPH</li>
                            <li className="list-group-item">The Weather will mainly be {props.data[day].weather[0].main}</li>
                            <li className="list-group-item">The UV Index will be at {Math.round(props.data[day].uvi)}</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DailyForecast;