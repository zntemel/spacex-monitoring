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
      <>
        {this.props.launches.data.length === 0 && "There is no launch."}
        {this.props.launches.data.map((launchItem, index) => (
          <Card
            img={launchItem.links.patch.small}
            title={launchItem.name}
            smallTitle={moment(launchItem.event_date_utc).format(
              "DD-MM-YYYY hh:mm"
            )}
            description={launchItem.details}
            url={launchItem.links.article}
            success={launchItem.success}
            failures={launchItem.failures}
            details="Article"
            key={index}
          />
        ))}
      </>
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
