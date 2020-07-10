import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchLaunches } from "../../js/actions/index";
import Card from "../../components/Card";
import moment from "moment";

class Launches extends Component {
  componentDidMount() {
    if (!this.props.launches.data.length > 0) {
      const launchesURL = "https://api.spacexdata.com/v4/launches";
      this.props.fetchLaunches(launchesURL);
    }
  }

  ListLaunchesData = () => {
    return (
      'LaunchesData'
    );
  };

  render() {
    return (
      <div className={"launches"}>
        <h5>Launches</h5>
        {this.props.launches.loading ? (
          <p>Loading...</p>
        ) : this.props.launches.error ? (
          <p>Error, try again</p>
        ) : (
          this.ListLaunchesData()
        )}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    ...state,
    launches: state.launches,
  };
}

export default connect(mapStateToProps, { fetchLaunches })(Launches);
