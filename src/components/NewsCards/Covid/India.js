import React from "react";
import "./summary.css";
import CountUp from "react-countup";
import Fade from "react-reveal/Fade";

// import Countries from 'countries';

class India extends React.Component {
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <div className="card-main">
        <Fade top>
          <div className="card-row">
            <div className="covid-cards covid1">
              <h4>New Confirmed</h4>
              <CountUp className="count" end={data.NewConfirmed} duration="4" />
              {/* <h2>{data.NewConfirmed}</h2> */}
            </div>
            <div className="covid-cards covid2">
              <h4>Total Confirmed</h4>
              <CountUp
                className="count"
                end={data.TotalConfirmed}
                duration="4"
              />
              {/* <h2> {data.TotalConfirmed}</h2> */}
            </div>

            <div className="covid-cards covid4">
              <h4>New Deaths</h4>
              <CountUp className="count" end={data.NewDeaths} duration="4" />
              {/* <h2>{data.NewDeaths}</h2> */}
            </div>
            <div className="covid-cards covid3">
              <h4>Total Deaths</h4>
              <CountUp className="count" end={data.TotalDeaths} duration="4" />
              {/* <h2> {data.TotalDeaths}</h2> */}
            </div>
            <div className="covid-cards covid5">
              <h4>Total Recovered</h4>
              <CountUp
                className="count"
                end={data.TotalRecovered}
                duration="4"
              />
              {/* <h2> {data.TotalRecovered}</h2> */}
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}
export default India;
