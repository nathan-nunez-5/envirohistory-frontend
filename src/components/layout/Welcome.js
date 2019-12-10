import React, { useEffect } from 'react';
import TodayEvent from '../Misc/TodayEvent';

import { connect } from 'react-redux';
import { getTodaysInfo } from '../../actions/search';

const Welcome = ({ getTodaysInfo, results }) => {
  useEffect(() => {
    getTodaysInfo();
  }, [getTodaysInfo]);

  console.log('Results:', results);

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const todaysDate = new Date();

  const d = new Date();
  document.write('The current month is ' + monthNames[d.getMonth()]);

  const data = [
    {
      img:
        'https://images.unsplash.com/photo-1568445156761-a5fd6db71eb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      title: 'Flood',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat elit sed felis posuere pellentesque. Vivamus ullamcorper fermentum mauris sit amet commodo. Quisque commodo enim in lorem pellentesque fringilla.',
      size: 'medium'
    },
    {
      img:
        'https://images.unsplash.com/photo-1570636801511-cc0b0e416f67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      title: 'Landslide',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat elit sed felis posuere pellentesque. Vivamus ullamcorper fermentum mauris sit amet commodo. Quisque commodo enim in lorem pellentesque fringilla.',
      size: 'medium'
    },
    {
      img:
        'https://images.unsplash.com/photo-1570636801511-cc0b0e416f67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      title: 'Landslide',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat elit sed felis posuere pellentesque. Vivamus ullamcorper fermentum mauris sit amet commodo. Quisque commodo enim in lorem pellentesque fringilla.',
      size: 'medium'
    },
    {
      img:
        'https://images.unsplash.com/photo-1552065475-454505176015?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2087&q=80',
      title: 'Tornado',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat elit sed felis posuere pellentesque. Vivamus ullamcorper fermentum mauris sit amet commodo. Quisque commodo enim in lorem pellentesque fringilla.',
      size: 'small'
    },
    {
      img:
        'https://images.unsplash.com/photo-1542631336-1ee02e0539ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      title: 'Rising Tides',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat elit sed felis posuere pellentesque. Vivamus ullamcorper fermentum mauris sit amet commodo. Quisque commodo enim in lorem pellentesque fringilla.',
      size: 'tall'
    },
    {
      img:
        'https://images.unsplash.com/photo-1454789476662-53eb23ba5907?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9',
      title: 'Tornado',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat elit sed felis posuere pellentesque. Vivamus ullamcorper fermentum mauris sit amet commodo. Quisque commodo enim in lorem pellentesque fringilla.',
      size: 'wide'
    }
  ];

  let events = [];
  let count = 0;

  data.forEach((item) => {
    if (count === 1) {
      events.push(
        <div className="portfolio-item large two">
          <div>
            <h3 className="main-title">EnviroHistory</h3>
            <small className="main-question">What happened on...</small>
            <h1 className="date-lg">
              {monthNames[todaysDate.getMonth()]} {todaysDate.getDate()}
            </h1>
          </div>
        </div>
      );
    } else {
      events.push(
        <TodayEvent
          backgroundImage={item.img}
          title={item.title}
          description={item.content}
          size={item.size}
        />
      );
    }
    count += 1;
  });

  return (
    <div className="container-fluid">
      <div className="main-content">
        <div className="portfolio">{events}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  results: state.results
});

export default connect(
  mapStateToProps,
  { getTodaysInfo }
)(Welcome);
