import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchLaunches } from "../../js/actions/index";
import Card from "../../components/Card";
import moment from "moment";
import Filter from "../../components/Filter";

class Launches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      launches: [],
      startDate: "",
      endDate: "",
      searchTitle: "",
      successStatus: false,
    };
  }

  componentDidMount() {
    if (!this.props.launches.data.length > 0) {
      const launchesURL = "https://api.spacexdata.com/v4/launches";
      this.props.fetchLaunches(launchesURL);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.launches !== this.props.launches && this.props.launches.data)
      this.setState({ launches: this.props.launches.data });
  }

  onChange = (name, event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  searchLaunch = (event) => {
    let searchValue = event.target.value;
    let updatedLaunches = this.state.launches.filter(function (item) {
      return item.name.toLowerCase().search(searchValue.toLowerCase()) !== -1;
    });

    this.setState({ launches: searchValue.length !== 0 ? updatedLaunches : this.props.launches.data});
  }
  
  filterSuccessLaunches = (event) => {
    let successValue = event.target.checked;

    let filteredLaunches = this.state.launches.filter(launch => {
      return launch.success && launch.success === successValue
    });

    this.setState({ 
      [event.target.name]: successValue,
      launches: successValue === true ? filteredLaunches : this.props.launches.data
    });
  }

  resetFilter = () => {
    this.setState({
      launches: this.props.launches.data,
      startDate: "",
      endDate: "",
      searchTitle: "",
      successStatus: "",
    });
  };

  filterLaunchesByDate = () => {
    const { startDate, endDate } = this.state;

    let updatedLaunches = this.state.launches.filter(function(launch) {
      if (
        launch.date_unix >= moment(startDate, "YYYY-MM-DD").unix() &&
        launch.date_unix <= moment(endDate, "YYYY-MM-DD").unix()
      ) {
        return launch;
      }else {
        return false
      }
    });

    this.setState({ launches: updatedLaunches });
  };

  listLaunchesData = () => {
    return (
      <>
        {this.state.launches.length === 0 && "There is no launch."}
        {this.state.launches.map((launchItem, index) => (
          <Card
            img={launchItem.links.patch.small}
            title={launchItem.name}
            smallTitle={moment(launchItem.date_utc).format("DD-MM-YYYY hh:mm")}
            description={launchItem.details}
            url={launchItem.links.article}
            success={launchItem.success}
            failures={launchItem.failures}
            upcoming={launchItem.upcoming}
            details="Article"
            key={index}
          />
        ))}
      </>
    );
  };

  isButtonDisabled = () => {
    const { startDate, endDate } = this.state;
    if(startDate && endDate) {
      return false
    }
    else return true
    
  }

  render() {
    const { startDate, endDate, successStatus } = this.state;
    return (
      <div className={"launches"}>
        <h5>Launches</h5>
        <div className="filter-list">
          <Filter
            successStatus={successStatus}
            startDate={startDate}
            endDate={endDate}
            onChange={this.onChange}
            filterLaunchesByDate={this.filterLaunchesByDate}
            resetFilter={this.resetFilter}
            searchLaunch={this.searchLaunch}
            filterSuccessLaunches={this.filterSuccessLaunches}
            isButtonDisabled={this.isButtonDisabled()}
          />
        </div>
        {this.props.launches.loading ? (
          <p>Loading...</p>
        ) : this.props.launches.error ? (
          <p>Error, try again</p>
        ) : (
          this.listLaunchesData()
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
