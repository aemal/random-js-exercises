import * as countryActionTypes from '../constants/countryConsts';
const initialState = {
    isLoading: false,
    countriesList: [
        {countryName: 'Afghanistan'},
        {countryName: 'Pakistan'},
        {countryName: 'Germany'},
        {countryName: 'India'}
      ]};

export const countryReducer = (country = initialState, action) => {
    switch(action.type) {
        case countryActionTypes.COUNTRIES_FETCHING_STARTED: {
            console.log("Fetching countries started...");
            return ({ ...country, isLoading: !country.isLoading });
        }

        case countryActionTypes.COUNTRIES_FETCHED: {
            console.log("Fetching countries ended...");
            return ({ country });
        }

        case countryActionTypes.COUNTRIES_FETCH_ERROR: {
            console.log("Fetching countries threw an error...");
            return ({ country });
        }

        default: {
            console.log("No action type matched in counterReducer.js");
            return ({ country });
        }

    }
}

