# React & Node.JS Weather App

A project for learning ReactJS.
The idea is to share knowledge and training resources as well as build a weather website using React and Node.JS. <br/>
<br/>
The frontend part was built following this [tutorial](https://rapidapi.com/blog/weather-app-react/).
In addition to the tutorial, I integrated the frontend with Node.JS backend.

## How to Run

First you should subscribe to [OpenWeatherMap API](https://rapidapi.com/community/api/open-weather-map) and add your API key into **app.js** in backend folder, then follow the instructions below:

```bash
# Remainder: step1 and step2 must be done in two different terminals!

# step1: run backend Node.JS
# In the 'backend' directory, run following command:
node app.js 


# step2: run frontend React.JS
# In the 'frontend' directory, run following command:
npm start

# After you run those two commands, visit http://localhost:3000
```

## Snapshots

### Main Page

![mainpage](/snapshots/mainpage.PNG)

### Error checking for empty input

![empty input](/snapshots/empty_input.PNG)

### Error checking for invalid input

![invalid input](/snapshots/invalid_input.PNG)

### Sample search result

![fahrenheit](/snapshots/fahrenheit.PNG)

![celcius](/snapshots/celcius.PNG)

## Main Technologies

### Client Side

- [x] **[React](https://github.com/facebook/react)**

### Server Side

- [x] **[Node.js / Express](https://github.com/expressjs/express)**