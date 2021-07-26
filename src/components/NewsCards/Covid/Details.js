import React from "react";
import axios from "axios";
import Summary from "./Summary";
import World from "./World";
import Loading from "./Loading";
import Fade from "react-reveal/Fade";

class Details extends React.Component {
  state = {
    countries: [],
    global: [],
    currentDate: null,
    loading: true,
    search: "",
    // indstate : []
  };

  async componentDidMount() {
    const res = await axios.get("https://api.covid19api.com/summary");
    //  const res = await  axios.get("https://disease.sh/v3/covid-19/countries");
    console.log(res);
    //   const sad = await  axios.get("https://api.covid19india.org/data.json");
    //   console.log(sad);
    //"https://disease.sh/v3/covid-19/countries"
    this.setState({ countries: res.data.Countries });
    this.setState({ global: res.data.Global });
    this.setState({ currentDate: res.data.Date });
    this.setState({ loading: false });
    //   this.setState({ indstate: sad.data.statewise});
  }

  render() {
    if (this.state.loading) {
      return (
        <center>
          {/* <h1>Loading...</h1> */}
          <Loading />
        </center>
      );
    }
    const { currentDate } = this.state;

    return (
      <div className="main-container">
        <div className="container-covidCards">
          <Fade top>
            <center>
              <h1>Cases All Over The World</h1>
              <h3> on</h3>
              <h2> {new Date(currentDate).toDateString()}</h2>
            </center>
          </Fade>
          <Summary
            summary={this.state.global}
            currentDate={this.state.currentDate}
          />
        </div>
        {/* <div className="container-1">
                <div className="card-world">
                        <Link to="/Covid/World">
                        WORLD
                        </Link>
                </div>
                <div className="card-india">
                        INDIA
                </div>
                </div> */}
        {/* <Switch> */}

        {/* <Route exact path="/Covid/World" >     */}
        <div className="container-table">
          <World countries={this.state.countries} />
          {/* </Route> */}
        </div>
        {/* </Switch> */}
      </div>
    );
  }
}

export default Details;
