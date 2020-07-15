import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import moment from 'moment';

const DayCard = ({ dailyData, setSelectedDayWeather }) => {

  const handleClick = (reading, i) => {
    setSelectedDayWeather(reading);
    setactive(i);
  }

  const [active, setactive] = useState(0);

  const Cards = dailyData.map((reading, index) => {
    let newDate = new Date();
    const weekday = reading.dt * 1000;
    newDate.setTime(weekday);
    const maxCelsius = Math.round(reading.temp.max - 273.5);
    const minCelsius = Math.round(reading.temp.min - 273.5);
    return (
      <div class="filter_dd8e1" tabindex="0" key={index}>
        <Card style={{
          minWidth: '120px', margin: '5px 2px',
          border: active === index ? '1px solid #0f6fff' : '',
          display: 'inline-block'
        }}
          onClick={() => handleClick(reading, index)}  >
          <CardContent>
            <Typography style={{ fontSize: 14 }} color="textSecondary" gutterBottom>
              <h4 className="card-title">{moment(newDate).format('dddd')}</h4>
            </Typography>
            <Typography variant="h5" component="h2">
              <div><span>{maxCelsius + "°"}</span> <span>{minCelsius + "°"}</span></div>
            </Typography>
            <Typography style={{ marginBottom: 12, }} color="textSecondary">
              <img src={require(`../assets/${reading.weather[0].icon}.png`)} alt="..."
                style={{ maxHeight: '80px' }} />
            </Typography>
            <Typography variant="body2" component="p">
              {reading.weather[0].description}
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
  })

  return (
    <div class="component_88892">
      <div class="filters_670e9">
        {Cards}
      </div>
    </div>
  )
}

export default DayCard;