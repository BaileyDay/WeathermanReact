import React from 'react';
import "./about.css"

const AboutPage = () => {

    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-light">
                    <a className="navbar-brand" href="/">WeatherMan</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home </a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/about">About<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://github.com/BaileyDay/WeathermanReact" target="_blank" rel="noopener noreferrer">Github</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div >
            <div >
                <div>
                    <div class="jumbotron">
                        <h1 class="display-4">Thanks for Visiting!</h1>
                        <img className="logo" src={require('./images/logo.png')} alt="Logo" id="aboutLogo" />
                        <p className="lead mt-5">WeatherMan was designed and built by <a href="https://github.com/BaileyDay" target="_blank" rel="noopener noreferrer">Bailey Day</a> for his Digital Crafts Cohort.</p>
                        <hr className="my-4"></hr>
                        <p>It wouldn't have been possible without the awesome utilities below!</p>
                        <p className="lead">

                        </p>
                    </div>
                </div>
                <div className="aboutCardWrapper">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card-body" id="AboutCard">
                                <img src="https://storage.googleapis.com/blog-images-backup/1*3SVfBkNZI2f-sspiq59xcw.png" alt="" className="UtilLogo" />
                                <h5 className="card-title">React.js</h5>
                                <p className="card-text">For JavaScript Rendered UI.</p>
                                <a href="https://reactjs.org/" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Visit React</a>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card-body" id="AboutCard">
                                <img src="https://cdn-media-1.freecodecamp.org/images/1*TKvlTeNqtkp1s-eVB5Hrvg@2x.png" alt="" className="UtilLogo2" />
                                <h5 className="card-title">React Router</h5>
                                <p className="card-text">For page routing within React.</p>
                                <a href="https://reacttraining.com/react-router/" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Visit React Router</a>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card-body" id="AboutCard">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png" alt="" className="UtilLogo3" />
                                <h5 className="card-title">BootStrap</h5>
                                <p className="card-text">Front end CSS Framework.</p>
                                <a href="https://getbootstrap.com/" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Visit BootStrap</a>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card-body" id="AboutCard">
                                <img src="https://openweathermap.org/themes/openweathermap/assets/img/openweather-negative-logo-RGB.png" alt="" className="UtilLogo4" />
                                <h5 className="card-title">Open Weather API</h5>
                                <p className="card-text">For Weather information and data.</p>
                                <a href="https://openweathermap.org/" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Visit OpenWeather</a>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card-body" id="AboutCard">
                                <img src="https://locationiq.com/static/img/locationiq-logo@2x.png" alt="" className="UtilLogo4" />
                                <h5 className="card-title">LocationIQ API</h5>
                                <p className="card-text">For GeoLocation data.</p>
                                <a href="https://locationiq.com/" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Visit LocationIQ</a>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card-body" id="AboutCard">
                                <img src="https://avatars0.githubusercontent.com/u/10342521?s=280&v=4" alt="" className="UtilLogo5" />
                                <h5 className="card-title">Chart.js</h5>
                                <p className="card-text">For dynamic charting, and shoutout to <a href="https://chartkick.com/react" target="_blank" rel="noopener noreferrer">ChartKick</a> for an easy to use solution. </p>
                                <a href="https://www.chartjs.org/" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Visit Chart.js</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default AboutPage;