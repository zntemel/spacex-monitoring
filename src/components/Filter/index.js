import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const Filter = (props) => {
  const {
    onChange,
    searchLaunch,
    filterSuccessLaunches,
    startDate,
    endDate,
    filterLaunchesByDate,
    resetFilter,
    successStatus,
    isButtonDisabled
  } = props;

  return (
    <div className="filter">
      <div className="filter-row">
        <input
          className="search-input"
          type="text"
          placeholder="Search by name "
          onChange={(event) => searchLaunch(event)}
        />
        <div className="status-checkbox">
          <input
            id="successStatus"
            name="successStatus"
            type="checkbox" 
            checked={successStatus}
            onChange={(event) => filterSuccessLaunches(event)}
          />
          Show Success Launches
        </div>
      </div>

      <div className="filter-row">
        <input
          type="date"
          name="startDate"
          id="startDate"
          value={startDate}
          onChange={(event) => onChange("startDate", event)}
        />
        <input
          type="date"
          name="endDate"
          id="endDate"
          value={endDate}
          onChange={(event) => onChange("endDate", event)}
        />
        <button type="button" id="filter-button" className={isButtonDisabled && 'disabled'} onClick={filterLaunchesByDate} disabled={isButtonDisabled}>
          Filter By Date
        </button>
      </div>
      <div className="filter-column">
        <button id="warning-button" onClick={resetFilter}>
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  successStatus: PropTypes.bool,
  onChange: PropTypes.func,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  resetFilter: PropTypes.func,
  filterLaunchesByDate: PropTypes.func,
  isButtonDisabled: PropTypes.bool,
};
