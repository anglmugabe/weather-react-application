import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
	const [weatherData, setWeatherData] = useState({ ready: false });
	const [city, setCity] = useState(defaultCity);

	function handleResponse(response) {
		setWeatherData({
			ready: true,
			coordinates: response.data.coord,
			temperature: response.data.main.temp,
			humidity: response.data.main.humidity,
			date: new Date(response.data.dt * 1000),
			description: response.data.weather[0].description,
			icon: response.data.weather[0].icon,
			wind: response.data.wind.speed,
			city: response.data.name,
		});
	}

	function handleSubmit(event) {
		event.preventDefault();
		search();
	}

	function handleCityChange(event) {
		setCity(event.target.value);
	}

	function search() {
		const apiKey = "cadc0335bc0tc128c364a2674f06oeee";
		let city = "Maputo";
		let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);
	}

	if (weatherData.ready) {
		return (
			<div className="Weather">
				<form onSubmit={handleSubmit}>
					<div className="row">
						<div className="col-9">
							<input
								type="search"
								placeholder="Enter a city..."
								className="form-control"
								autoFocus="on"
								onChange={handleCityChange}
							/>
						</div>
						<div className="col-3">
							<input
								type="submit"
								value="Search"
								className="btn btn-primary w-100"
							/>
						</div>
					</div>
				</form>

				<h1> Maputo </h1>
				<ul>
					<li>Sunday 11:00 </li>
					<li> Partly Cloudy </li>
				</ul>
				<div className="row mt-3">
					<div className="col-6">
						<div className="clearfix ">
							<img
								src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
								alt="Partly Cloudy "
							/>
							23°C
						</div>
					</div>
					<div className="col-6">
						<ul>
							<li>Precipitation 0%</li>
							<li>Humidity: 56%</li>
							<li> Wind: 29km/h</li>
						</ul>
					</div>
				</div>
			</div>
		);
	} else {
		search();
		return "Loading...";
	}
}
