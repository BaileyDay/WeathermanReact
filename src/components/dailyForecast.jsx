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
            <div className="card-group">
                {props.data.map((item, id) => (
                    <div className="card-body DailyCard" id={[id]} onClick={handleClick}>
                        <h5 className="card-title">{days[(new Date(item.dt * 1000).getDay())]}</h5>
                        <div><img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="Weather Icon"></img></div>
                    </div>))}
                <div>
                    <h1>The High is {props.data[day].temp.max}</h1>
                </div>

            </div>
        </div>
    )
}

export default DailyForecast;