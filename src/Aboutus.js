import React from "react";
import axios from "axios";
class About extends React.Component {
  render() {
    return (
      <div className="maindivaboutus">
        <div>
          <h3>Weather Stations Facts</h3>
          <p>
            A weather station is a device that is able to measure a variety of
            meteorological elements such as temperature, rain, wind, air
            pressure, humidity, solar radiation and more depending on the type
            of weather station. There are several different types of weather
            stations including wireless weather stations, home weather stations,
            professional weather stations, and digital weather stations. Weather
            stations can be placed aboard dedicated ships, buoys, and on
            buildings and homes. They can be used for personal purposes such as
            entertainment, or for scientific research, as well as for
            forecasting the weather and storm warning purposes.
          </p>
          <h3>Interesting Weather Stations Facts</h3>
          <ul>
            <li>
              Weather stations usually have a thermometer for measuring the
              temperature of the air or the surface of the sea.
            </li>
            <li>
              Weather stations usually have a barometer for measuring the
              pressure in the atmosphere.
            </li>
            <li>
              Weather stations usually have a hygrometer for measuring the
              relative humidity in the atmosphere.
            </li>
            <li>
              Anemometers are usually present on weather stations to measure the
              speed of wind.
            </li>
            <li>
              Pyranometers are usually present on weather stations to measure
              the level of solar radiation.
            </li>
            <li>
              Weather stations usually have a rain gauge for measuring liquid
              precipitation over a specific time period.
            </li>
            <li>
              Snow gauges are sometimes found on weather stations to measure the
              amount of snow in a specific time period.
            </li>
            <li>
              Some weather stations also have sensors that measure the rain
              falling at the present time. They may also have a disdrometer that
              is capable of measuring drop size distribution, a transmissometer
              to measure visibility in real time, and a ceilometer to measure
              the cloud ceiling. These are found more often at automated airport
              weather stations.
            </li>
            <li>
              Some weather stations are used for measuring the moisture in the
              soil, temperature in the soil, ultraviolet index, leaf moisture,
              and the temperature in various water bodies such as rivers, lakes,
              and ponds.
            </li>
            <li>
              Weather stations are designed to protect certain instruments while
              allowing others to be exposed to the elements, such as allowing a
              rain gauge to get wet but keeping a thermometer dry.
            </li>
            <li>
              Weather stations are found on buoys in lakes and oceans all over
              the world. They are able to transmit data pertaining to weather
              conditions that is used by meteorologists all over the world.
            </li>
            <li>
              Weather stations aboard buoys are replacing many of the weather
              ships as they are less expensive to operate. Weather buoys can be
              stationary or drifting.
            </li>
            <li>
              Many weather stations today do not rely on people to report the
              data as it is sent automatically to a central location and
              analyzed and reported from there.
            </li>
            <li>
              Owners of home weather stations can register their instruments so
              that the data is collected and sent to a weather network.
            </li>
            <li>
              The United States has several weather networks set up for weather
              station data collection including the National Weather Service
              Cooperative Observer Program, the Michigan Automated Weather
              Network and the Georgia Environmental Monitoring Network, as well
              as several more.
            </li>
            <li>
              Global networks for collecting weather station data include the
              Weather Underground Personal Weather Stations and Citizen Weather
              Observer program.
            </li>
            <li>
              Global networks for collecting weather station data include the
              Weather Underground Personal Weather Stations and Citizen Weather
              Observer program.
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default About;
