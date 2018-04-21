import * as countryActionTypes from '../constants/countryConsts';
const initialState = {
    isLoading: false,
    countriesList: []
};

export const countryReducer = (country = initialState, action) => {
    switch(action.type) {
        case countryActionTypes.COUNTRIES_FETCHING_STARTED: {
            console.log("Fetching countries started...", action);
            return ({ ...country, isLoading: true });
        }

        case countryActionTypes.COUNTRIES_FETCHED: {
            console.log("Fetching countries ended...");
            return ({ ...country, countriesList: action.countriesList, isLoading: false });
        }

        case countryActionTypes.COUNTRIES_FETCH_ERROR: {
            console.log("Fetching countries threw an error...");
            return ({ country });
        }

        default: {
            console.log("No action type matched in counterReducer.js");
            return ({ ...country });
        }

    }
}

