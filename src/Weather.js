import React from "react";
import "./Weather.css";

export default function Weather() {
	return (
		<div className="Weather">
			<form>
				<div className="row">
					<div className="col-9">
						<input
							type="search"
							placeholder="Enter a city..."
							className="form-control"
							autoFocus="on"
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
}
