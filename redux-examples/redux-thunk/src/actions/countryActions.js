import * as countryActionTypes from '../constants/countryConsts';
import axios from 'axios';
import { COUNTRIES_API } from '../config';

export const fetchCountries = () => {
    return (dispatch) => {
        
        
        //dispatch flag for loading animation
        dispatch({ type: countryActionTypes.COUNTRIES_FETCHING_STARTED });


        return {};
        //AJAX request with axios
       /* axios.get(COUNTRIES_API)
            .then(res => dispatch({ 
                type: countryActionTypes.COUNTRIES_FETCHED, 
                res 
            }))
            .catch((err) => dispatch({ 
                type: countryActionTypes.COUNTRIES_FETCH_ERROR, 
                err 
            }));*/
    };
}