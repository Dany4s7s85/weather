import React, { Component } from "react";
import "./css/App.css";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Favourites from "./components/Favourites";
import API_KEY from "./config.js";

class Cities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: {
        weather: "",
        city: "",
        country: "",
        temp: 0,
      },
      searchDone: false,
      savedCities: [],
      hasSavedCities: false,
      errorMessage: "",
    };

    this.callWeatherData = this.callWeatherData.bind(this);
    this.updateSavedCities = this.updateSavedCities.bind(this);
  }

  callWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`;
    fetch(url)
      .then(handleErrors)
      .then((resp) => resp.json())
      .then((data) => {
        const weatherObj = {
          weather: data.weather,
          city: data.name,
          country: data.sys.country,
          temp: data.main.temp,
          main: data.main,
          wind: data.wind,
          humidity: data.main.humidity,
          wind_direction: data.wind.deg,
          pressure: data.main.pressure,
          sunrise: data.sys.sunrise,
          visibility: data.visibility,
          sunset: data.sys.sunset,
        };
        this.setState({
          weatherData: weatherObj,
          searchDone: true,
          errorMessage: "",
        });
      })
      .catch((error) => {
        // If an error is catch, it's sent to SearchBar as props
        this.setState({ errorMessage: error.message });
      });

    function handleErrors(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    }
  }

  updateSavedCities(cityArr) {
    // hasCities is set to true if length is more than 0, otherwise false
    const hasCities = cityArr.length > 0;
    this.setState({ savedCities: cityArr, hasSavedCities: hasCities });
  }

  componentWillMount() {
    // See if there's saved cities in localStorage before the App is mounted
    // Tests didn't like parsing when localStorage.getItem was undefined, so this was my solution for it
    let existingCities = JSON.parse(localStorage.getItem("cityList") || "[]");

    if (existingCities.length !== 0) {
      this.setState({
        hasSavedCities: true,
        savedCities: existingCities,
      });
    }
  }

  render() {
    const {
      searchDone,
      weatherData,
      hasSavedCities,
      savedCities,
      errorMessage,
    } = this.state;

    return (
      <div className="App">
        <SearchBar
          callBackFromParent={this.callWeatherData}
          error={errorMessage}
        />
        {searchDone && (
          <WeatherCard
            weatherData={weatherData}
            savedCities={savedCities}
            callBackFromParent={this.updateSavedCities}
          />
        )}
        {hasSavedCities && (
          <Favourites
            savedCities={savedCities}
            callBackFromParent={this.callWeatherData}
          />
        )}
      </div>
    );
  }
}

export default Cities;
