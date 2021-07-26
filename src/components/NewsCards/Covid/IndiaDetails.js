import React from "react";
import axios from "axios";
import StatesIndia from "./StatesIndia";
import India from "./India";
import Loading from "./Loading";
import Fade from "react-reveal/Fade";

class IndiaDetails extends React.Component {
  state = {
    indstate: [],
    countries: [],
    search: "",
    loading: true,
  };

  async componentDidMount() {
    const sad = await axios.get("https://api.covid19india.org/data.json");
    // console.log(sad);
    this.setState({ indstate: sad.data.statewise });
    const newRes = await axios.get("https://api.covid19api.com/summary");
    // console.log(newRes);
    this.setState({ countries: newRes.data.Countries[76] });
    this.setState({ loading: false });
    this.setState({ currentDate: newRes.data.Date });
  }

  onChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  render() {
    if (this.state.loading) {
      return (
        <center>
          {/* <h1>Loading...</h1> */}
          <Loading />
        </center>
      );
    }
    // const { data } = this.props;
    // const {indstate} = this.props;
    const { indstate } = this.state;
    const { search, currentDate } = this.state;
    // const { indiaGlobal } = this.state;
    let filteredStates = this.state.indstate;
    const filteredS = filteredStates.filter((State) => {
      return State.state.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    return (
      <div>
        <Fade top>
          <center>
            <h1 className="head">Cases in INDIA</h1>
            <h3>on</h3>
            <h2> {new Date(currentDate).toDateString()}</h2>
          </center>
        </Fade>
        <India data={this.state.countries} />

        <br />
        <div className="container-table">
          <center>
            <input
              placeholder="Search State"
              onChange={this.onChange}
              className="search-bar"
            ></input>
          </center>

          <table className="ind-table">
            <thead>
              <tr>
                <th className="table-row">States</th>
                <th className="table-row"> Active Cases</th>
                <th className="table-row">Total Confirmed </th>
                <th className="table-row">Total Recovered</th>
                <th className="table-row">Total Deaths</th>
              </tr>
            </thead>
            <tbody>
              {filteredS.map((states) => (
                <StatesIndia indstate={states} key={states.state} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default IndiaDetails;
