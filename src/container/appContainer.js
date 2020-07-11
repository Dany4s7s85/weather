import React from 'react';
import DayCard from '../app_component/weekweather/DayCard';
import HourlyChart from '../app_component/HourlyChart';
import { CurrentWeatherContext } from '../_context/currentWeatherContext';
import { CircularProgress } from '@material-ui/core';

class WeekContainer extends React.Component {
    state = {
        fullData: [],
        dailyData: []
    }

    render() {
        return (
            <div className="container">
                <CurrentWeatherContext.Consumer>{
                    (context) => {
                        const currentWeather = context.currentWeather;
                        console.log(context);
                        if (currentWeather) {
                            const dailyData = currentWeather.dailyData
                            return (<div>
                                <div className="row justify-content-center">
                                    {dailyData && <DayCard />}
                                </div>
                                <HourlyChart todayWeather={context.selectedDayWeather} />
                            </div>)
                        }
                        else {
                            return <CircularProgress size={50} />
                        }
                    }}
                </CurrentWeatherContext.Consumer>
            </div>
        )
    }
}

export default WeekContainer;