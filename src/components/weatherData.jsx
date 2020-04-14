import React, { Component } from 'react';
import LocationInput from './locationInput'
import DailyForecast from './dailyForecast'
import './weatherData.css'


class WeatherData extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    state = {

        userInput: "",
        day: ""

    }

    handleChange = async (e) => {
        this.setState({
            userInput: e.target.value
        })

    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const locationAPI = "5c057ee7425479"
        const WeatherAPI = "9d361632a2c3255aa7f63cd793f12849"



        let locationUrl = `https://us1.locationiq.com/v1/search.php?key=${locationAPI}&q=${this.state.userInput}&format=json`
        await fetch(locationUrl)
            .then(response => response.json())
            .then((result) => {
                this.setState({
                    locationItems: result
                })

            });
        try {
            let weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.locationItems[0].lat}&lon=${this.state.locationItems[0].lon}&appid=${WeatherAPI}&units=imperial`;
            await fetch(weatherUrl)
                .then(response => response.json())
                .then((result) => {
                    this.setState({
                        items: result,
                        ErrorInfo: "",
                        location: this.state.locationItems[0].display_name
                    })
                    console.log(this.state.items.daily)
                });
        }
        catch (e) {
            console.error(e.message)
            this.setState({
                ErrorInfo: "Please Enter a Valid Location",

            })
        }




    }

    render() {
        return (
            <div>
                <LocationInput UserInput={this.state.UserInput} click={this.handleSubmit} change={this.handleChange} />
                {this.state && this.state.ErrorInfo && <p class="alert alert-danger" id="ErrorAlert">
                    {this.state.ErrorInfo}
                </p>}
                <div className="CurrentTitle">{this.state && this.state.items && <h1>Your Current Forecast in {this.state.location}</h1>}</div>
                <div className="dataWrapper">

                    {this.state && this.state.items &&
                        <div className="card-columns">

                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Current Temperature</h5>
                                    <p className="card-text">{Math.round(this.state.items.current.temp)} ℉</p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Feels Like</h5>
                                    <p className="card-text">{Math.round(this.state.items.current.feels_like)} ℉</p>
                                </div>
                            </div>
                            <div className="card" >
                                <div className="card-body" id="imageCard">
                                    <h5 className="card-title">Currently there is {this.state.items.current.weather[0].main}</h5>
                                    <div className="colorOverlay">
                                        <img src={`http://openweathermap.org/img/wn/${this.state.items.current.weather[0].icon}.png`} alt="Weather Icon"></img>
                                    </div>
                                </div>
                            </div>
                        </div>}
                </div>
                {this.state && this.state.items &&
                    <DailyForecast data={this.state.items.daily} />}

            </div>
        )

    }

}


export default WeatherData;