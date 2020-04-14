import React from 'react'
import './daily.css'

const DailyForecast = (props) => {

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return (
        <div>
            <h1 className="WeeklyTitle">Your Weekly Forecast</h1>
            <div className="DailyContainer">
                <div className="DailyCardContainer">
                    {props.data.map((item) => (
                        <div className="DailyCard">
                            <h5>{days[(new Date(item.dt * 1000).getDay())]}</h5>
                            <div><img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="Weather Icon"></img></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DailyForecast;