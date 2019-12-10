import React, { useState } from 'react';
import Selector from '../Misc/Selectors';
import SearchResult from '../Misc/SearchResult';
import SearchBar from '../Misc/SearchBar';

import { connect } from 'react-redux';

const Search = ({ results, loading }) => {
  let variables = ['Fire', 'Hurricane', 'Landslide', 'Tornado', 'Flood'];
  let spatialCoverages = ['America', 'Japan', 'Indonesia'];

  let Cards = [];

  const Items = results.items;
  console.log(Items);
  /* Search cards */
  if (Items !== undefined) {
    Items.forEach((item) => {
      Cards.push(<SearchResult result={item} />);
    });
  }

  /* Search cards */
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
        {Cards}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    loading: state.search.loading,
    results: state.search.results
  };
};

export default connect(mapStateToProps)(Search);
