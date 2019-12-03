import React from 'react';

const TodayEvent = ({ backgroundImage, title, description, size }) => {
  const classes = `portfolio-item ${size}`;

  return (
    <div
      className={classes}
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      <div className="today-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TodayEvent;
