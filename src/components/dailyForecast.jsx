import React, { useState } from 'react'
import './daily.css'
import 'chart.js'
import { AreaChart } from 'react-chartkick'

const DailyForecast = (props) => {

    const [day, setDay] = useState(0);

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const handleClick = async (e) => {
        setDay(e.currentTarget.getAttribute("id"))
        console.log(props.data[day])
    }

    // Chart Information and code, need to refactor to be more effecient.

    function fetchData(success, fail) {
        const data = [[days[(new Date(props.data[1].dt * 1000).getDay())], Math.round(props.data[1].temp.day)],
        [days[(new Date(props.data[2].dt * 1000).getDay())], Math.round(props.data[2].temp.day)],
        [days[(new Date(props.data[3].dt * 1000).getDay())], Math.round(props.data[3].temp.day)],
        [days[(new Date(props.data[4].dt * 1000).getDay())], Math.round(props.data[4].temp.day)],
        [days[(new Date(props.data[5].dt * 1000).getDay())], Math.round(props.data[5].temp.day)],
        [days[(new Date(props.data[6].dt * 1000).getDay())], Math.round(props.data[6].temp.day)],
        [days[(new Date(props.data[7].dt * 1000).getDay())], Math.round(props.data[7].temp.day)]]
        success(data)

    }

    let minimumTemp = [Math.round(props.data[1].temp.day), Math.round(props.data[2].temp.day), Math.round(props.data[3].temp.day), Math.round(props.data[4].temp.day), Math.round(props.data[5].temp.day), Math.round(props.data[6].temp.day), Math.round(props.data[7].temp.day)]

    Array.min = function (array) {
        return Math.min.apply(Math, array);
    };

    let almostSmallestNum = Array.min(minimumTemp) - 10

    let smallestNum = Math.round(almostSmallestNum / 10) * 10

    let maxTemp = [Math.round(props.data[1].temp.day), Math.round(props.data[2].temp.day), Math.round(props.data[3].temp.day), Math.round(props.data[4].temp.day), Math.round(props.data[5].temp.day), Math.round(props.data[6].temp.day), Math.round(props.data[7].temp.day)]

    Array.max = function (array) {
        return Math.max.apply(Math, array);
    };

    let almostMaxNum = Array.max(maxTemp)

    let maxNum = Math.round(almostMaxNum / 10) * 10 + 10



    //End Chart code

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
                <div>
                    <h1 className="graphTitle">
                        7 Day  Average Temperature
                    </h1>
                </div>
                <div className="chartContainer">
                    <AreaChart data={fetchData}
                        width="75%"
                        colors={["#f06d06", "#f06d06"]}
                        xtitle="Day"
                        ytitle="Temperature ℉"
                        suffix="℉"
                        min={0}
                        max={100}
                        dataset={{ borderWidth: 5 }}
                        library={{
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        maxTicksLimit: 20, stepSize: 10, min: smallestNum, max: maxNum

                                    }
                                }]
                            }, animation: { easing: 'easeOutQuad' }
                        }}

                    />
                </div>
            </div>
        </div>
    )
}

export default DailyForecast;