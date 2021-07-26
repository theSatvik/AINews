import React from "react";
import Countries from "./Countries";
import "./table.css";
class World extends React.Component {
  state = {
    search: "",
  };

  onChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  render() {
    const { countries } = this.props;
    let filteredCountries = countries;
    const { search } = this.state;
    const filteredC = filteredCountries.filter((country) => {
      return country.Country.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    return (
      <div className="container-table">
        <center>
          <input
            placeholder="Search Country"
            onChange={this.onChange}
            className="search-bar"
          ></input>
        </center>
        <table className="world-table">
          <thead>
            <tr>
              <th className="table-row">Country</th>
              <th className="table-row">New Confirmed Cases</th>
              <th className="table-row">Total Confirmed </th>
              <th className="table-row">Total Recovered</th>
              <th className="table-row">Total Deaths</th>
            </tr>
          </thead>
          <tbody>
            {filteredC.map((country) => (
              <Countries countries={country} key={country.Country} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default World;
