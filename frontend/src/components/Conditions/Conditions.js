import React from "react";
import classes from "./Conditions.module.css"

const conditions = (props) => {
	const degreeSymbol = props.unit === "imperial" ? "F" : "C";

	return (
		<div className={classes.Wrapper}>
			{props.error && <small className={classes.Small}><strong>Please enter a valid city.</strong></small>}
			{props.loading && <div className={classes.Loader}>Loading...</div>}

			{props.responseObj.cod === 200 ?
				<div>
					<h3><strong>{props.responseObj.name}</strong></h3>
					<p>It is currently {Math.round(props.responseObj.main.temp)}°{degreeSymbol} out
						with {props.responseObj.weather[0].description}</p>
					<p>Wind speed: {props.responseObj.wind.speed}MPH</p>
					<p>Humidity: {props.responseObj.main.humidity}%</p>
				</div>
				: null
			}
		</div>
	)
}

export default conditions;
