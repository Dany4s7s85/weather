import React from 'react';
import { Line } from 'react-chartjs-2';

import moment from "moment";

export default class HourlyChart extends React.Component {


    state = {
        labels: ['January', 'February', 'March',
            'April', 'May'],
        datasets: [
            {
                label: 'Rainfall',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [65, 59, 80, 81, 56]
            }
        ]
    }


    componentDidMount = () => {

        // console.log(this.props);

        let country = 'In';
        let city = 'Delhi'

        let lat = "28.541100";
        let lon = "77.281677";

        let y = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&timezone_offset=4444455&exclude=daily&appid=429736441cf3572838aa10530929f7cd`;

        var x = 60; //minutes interval
        var times = []; // time array
        var tt = 0; // start time
        var ap = ['AM', 'PM']; // AM-PM

        //loop to increment the time and push results in array
        for (var i = 0; tt < 24 * 60; i++) {
            var hh = Math.floor(tt / 60); // getting hours of day in 0-24 format
            var mm = (tt % 60); // getting minutes of the hour in 0-55 format
            times[i] = ("0" + (hh % 12)).slice(-2) + ':' + ("0" + mm).slice(-2) + ap[Math.floor(hh / 12)]; // pushing data in array in [00:00 - 12:00 AM/PM format]
            tt = tt + x;
        }

        // console.log(times);

        fetch(y)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const hourly = data.hourly
                if (hourly) {
                    var x = 60; //minutes interval
                    var times = []; // time array
                    var tt = 0; // start time
                    var ap = ['AM', 'PM']; // AM-PM

                    //loop to increment the time and push results in array
                    for (var i = 0; tt < 24 * 60; i++) {
                        var hh = Math.floor(tt / 60); // getting hours of day in 0-24 format
                        var mm = (tt % 60); // getting minutes of the hour in 0-55 format
                        times[i] = ("0" + (hh % 12)).slice(-2) + ':' + ("0" + mm).slice(-2) + ap[Math.floor(hh / 12)]; // pushing data in array in [00:00 - 12:00 AM/PM format]
                        tt = tt + x;
                    }

                    // console.log(times);

                    let dataset = [];
                    let set = [];

                    hourly.forEach((hour, i) => {
                        if (i < 24) {
                            // let time = moment(hour.dt).format('h:mm a');
                            const celsius = Math.round(hour.temp - 273.5);
                            set.push(celsius);
                        }
                    });

                    dataset[0] = { ...this.state.datasets[0], data: set }

                    this.setState({ labels: times, datasets: dataset })

                }
            })
    }

    render() {
        return (
            <div>
                <Line
                    data={this.state}
                    options={{
                        title: {
                            display: true,
                            text: 'Average Rainfall per month',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                        ,scales:{
                            yAxes: [{
                                ticks: {
                                    suggestedMin: 0,
                                    suggestedMax: 50
                                }
                            }]
                        }
                    }}
                />
            </div>
        );
    }
}
