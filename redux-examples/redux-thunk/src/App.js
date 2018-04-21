import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as countryActions from './actions/countryActions';

const App = (props) => {

  const fetchCountries = () => {
   props.fetchCountries();
  }

  const displayCountries = () => {
    const countries = props.country.countriesList;

    const counriesJSX = countries.map((country, index) => {
      return (
        <li key={index}>{country.countryName}</li>
      );
    });

    return (
      <ul>
        {counriesJSX}    
      </ul>
    );
  }

  return (
    <div>
      <button onClick={fetchCountries}>Fetch Countries</button>
      {displayCountries()}
    </div>
  );
}

const mapStateToProps = ({ country }) => {
  return ({ country: country.country })
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(countryActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
