import React from "react";
import {useState} from "react";
import Conditions from "../Conditions/Conditions";
import classes from './Forecast.module.css'
import axios from "axios";

const Forecast = () => {
	let [forecastResponseObj, setForecastResponseObj] = useState({});
	let [city, setCity] = useState('');
	let [unit, setUnit] = useState('imperial');

	//error handling and loading
	let [error, setError] = useState(false);
	let [loading, setLoading] = useState(false);

	function getForecast(e) {
		e.preventDefault();

		if (city.length === 0) {
			return setError(true);
		}

		// Clear state in preparation for new data
		setError(false);
		setForecastResponseObj({});
		setLoading(true);

		const uriEncodedCity = encodeURIComponent(city);
		const forecastURL = "http://localhost:5000?units="
		+ unit + "&q=" + uriEncodedCity;

		axios.get(forecastURL, {crossdomain: true})
			.then(response => {
				console.log(response.data);
				if (response.data.cod !== 200) {
					throw new Error()
				}
				setForecastResponseObj(response.data);
				setLoading(false);
			})
			.catch(err => {
				setError(true);
				setLoading(false);
				console.log(err.message);
			});
	}

	return (
		<div>
			<h2>Find Current Weather Conditions</h2>

			{/*<button onClick={getForecast}> Get Forecast</button>*/}

			<form onSubmit={getForecast}>
				<input
					type="text"
					placeholder="Enter City"
					maxLength="50"
					className={classes.TextInput}
					value={city}
					onChange={(e) => setCity(e.target.value)}
				/>

				<label className={classes.Radio}>
					<input
						type="radio"
						name="units"
						checked={unit === "imperial"}
						value="imperial"
						onChange={(e) => setUnit(e.target.value)}
					/>
					Fahrenheit
				</label>

				<label className={classes.Radio}>
					<input
						type="radio"
						name="units"
						checked={unit === "metric"}
						value="metric"
						onChange={(e) => setUnit(e.target.value)}
					/>
					Celcius
				</label>

				<button className={classes.Button} type="submit">Get Forecast</button>
			</form>

			<Conditions responseObj={forecastResponseObj} error={error} loading={loading} unit={unit}/>
		</div>
	)
}

export default Forecast;