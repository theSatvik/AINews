import React from "react";
import "./summary.css";
import CountUp from "react-countup";
import Reveal from "react-reveal/Reveal";
import Fade from "react-reveal/Fade";

class Summary extends React.Component {
  render() {
    const { summary, currentDate } = this.props;

    return (
      <div>
        <div className="card-main">
          <Fade top>
            <center>
              <div className="card-row">
                <div className="covid-cards covid1 tooltip">
                  <Reveal effect="fadeInUp">
                    <h4>New Confirmed</h4>
                    <CountUp
                      className="count"
                      end={summary.NewConfirmed}
                      duration="4"
                    />
                  </Reveal>
                  <span className="tooltip-text">
                    <p>{summary.NewConfirmed}</p>
                  </span>
                  {/* <h1>{summary.NewConfirmed}</h1> */}
                  {/* <h4>{new Date(currentDate).toDateString()}</h4> */}
                </div>

                <div className="covid-cards covid2 tooltip">
                  <h4>Total Confirmed</h4>

                  <CountUp
                    className="count"
                    end={summary.TotalConfirmed}
                    duration="4"
                  />
                  <span className="tooltip-text">
                    <p>{summary.TotalConfirmed}</p>
                  </span>
                  {/* <h1>{summary.TotalConfirmed}</h1> */}
                  {/* <h4>{new Date(currentDate).toDateString()}</h4> */}
                </div>

                <div className="covid-cards covid3 tooltip">
                  <h4>New Deaths</h4>
                  <CountUp
                    className="count"
                    end={summary.NewDeaths}
                    duration="4"
                  />
                  <span className="tooltip-text">
                    <p>{summary.NewDeaths}</p>
                  </span>
                  {/* <h1>{summary.NewDeaths}</h1> */}
                  {/* <h4>{new Date(currentDate).toDateString()}</h4> */}
                </div>
                <div className="covid-cards covid4 tooltip">
                  <h4>Total Deaths</h4>
                  <CountUp
                    className="count"
                    end={summary.TotalDeaths}
                    duration="4"
                  />
                  <span className="tooltip-text">
                    <p>{summary.TotalDeaths}</p>
                  </span>
                  {/* <h1>{summary.TotalDeaths}</h1> */}
                  {/* <h4>{new Date(currentDate).toDateString()}</h4> */}
                </div>
                <div className="covid-cards covid5 tooltip">
                  <h4>Total Recovered</h4>
                  <CountUp
                    className="count"
                    end={summary.TotalRecovered}
                    duration="4"
                  />
                  <span className="tooltip-text">
                    <p>{summary.TotalRecovered}</p>
                  </span>
                  {/* <h1>{summary.TotalRecovered}</h1> */}
                  {/* <h4>{new Date(currentDate).toDateString()}</h4> */}
                </div>
              </div>
            </center>
          </Fade>
        </div>
      </div>
    );
  }
}

export default Summary;
