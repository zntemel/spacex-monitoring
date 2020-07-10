import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Card = (props) => {
  const { img, title, smallTitle, description, url, details, success, failures } = props;
  return (<div className="card">
    <img className="card-image" src={img} height="150" width="150" />
    <div className="card-content">
      <p className="card-title">{title}</p>
      <p className="card-small-title">{smallTitle}</p>
      <p className="card-description">{description}</p>
      <p className="card-description">{success ? 'Success' : `Fail - ${failures}`}</p>
      <a href={url} target="_blank" rel="noreferrer">
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
  failures: PropTypes.string,
}