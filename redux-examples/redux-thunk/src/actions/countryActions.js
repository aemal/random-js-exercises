import * as countryActionTypes from '../constants/countryConsts';
import axios from 'axios';
import { COUNTRIES_API } from '../config';

export const requestCountries = () => {
    return ({type: countryActionTypes.COUNTRIES_FETCHING_STARTED });
}

export const fetchCountries = () => (dispatch) => {
    dispatch(requestCountries());
    
    return (
           axios.get(COUNTRIES_API)
            .then(res => dispatch({ 
                type: countryActionTypes.COUNTRIES_FETCHED, 
                countriesList: res.data 
            }))
            .catch((err) => dispatch({ 
                type: countryActionTypes.COUNTRIES_FETCH_ERROR, 
                err 
            }))
        );
}