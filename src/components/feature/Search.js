import React from 'react';
import Selector from '../Misc/Selectors';
import SearchResult from '../Misc/SearchResult';
import SearchBar from '../Misc/SearchBar';

const Search = () => {
  let results = [];

  let data = [
    {
      title: 'Tennessee Wildfire',
      year: '2016',
      content: 'Destroyed nearly 2,000 structures; burned nearly 18,000 acres.'
    },
    {
      title: 'California Camp Fire',
      year: '2018',
      content:
        "The Camp Fire ravaged North California, destroying more than 18,000 structures. The Camp Fire was the worst fire in California to this date, and was fueled by large national forests. The campfire was started by a yodeling pickle when it's battery exploded on a tree."
    },
    {
      title: 'Okanogan Complex fire',
      year: '2015',
      content:
        'Damage figure includes costs involved in the fighting of the fire.'
    },
    {
      title: 'Colorado Fire',
      year: '2012',
      content: ''
    },
    {
      title: 'Yarnell Hill Fire',
      year: '2014',
      content:
        "The Camp Fire ravaged North California, destroying more than 18,000 structures. The Camp Fire was the worst fire in California to this date, and was fueled by large national forests. The campfire was started by a yodeling pickle when it's battery exploded on a tree."
    },
    {
      title: 'California Wildfire',
      year: '2007',
      content:
        'Large fires burned out of control across southern California, fueled by unusually strong Santa Ana winds; worst around San Diego; caused evacuation of over one million people. Most fires accidental; some suspected arson.'
    }
  ];

  let variables = ['Fire', 'Hurricane', 'Landslide', 'Tornado', 'Flood'];
  let spatialCoverages = ['America', 'Japan', 'Indonesia'];

  /* Search cards */
  data.forEach((item) => {
    results.push(<SearchResult result={item} />);
  });

  return (
    <div className="row">
      <div id="side-bar" className="col-3">
        {/* Variable */}
        <Selector title="Variables" optionNames={variables} />
        <hr></hr>

        {/* Spatial Coverage */}
        <h3>Spatial coverage</h3>
        <img
          id="map-img"
          src="https://images.photowall.com/products/58350/new-york-map-bw.jpg"
          alt="map"
        ></img>
        <Selector title="Spatial Coverage" optionNames={spatialCoverages} />
        <hr></hr>
      </div>

      <div id="results" className="col-9">
        <SearchBar />
        {/* Card 1 */}
        {results}
      </div>
    </div>
  );
};

export default Search;
