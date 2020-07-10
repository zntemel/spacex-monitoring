import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Card = (props) => {
  const { img, title, smallTitle, description, url, details, success, failures, upcoming } = props;
  return (<div className="card">
    <img className="card-image" src={img} alt="launch" height="150" width="150" />
    <div className="card-content">
      <p className="card-title">{title}</p>
      <p className="card-small-title">{smallTitle}</p>
      <p className="card-description">{description}</p>
      <p className="card-description-item">Success Status : {success ? 'Success' : 'Fail'}</p>
      <p className="card-description-item">{!success && `Fail Reason : ${failures}`}</p>
      <p className="card-description-item">Upcoming : {upcoming ? 'True' : 'False'}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <button className="card-button">
          {details}
        </button>
      </a>
    </div>
  </div>
  );
};

export default Card;

Card.propTypes = {
  title: PropTypes.string,
  smallTitle: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  details: PropTypes.string,
  img: PropTypes.string,
  success: PropTypes.bool,
  failures: PropTypes.array,
}