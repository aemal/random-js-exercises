import * as counterActions from '../constants/counterConsts';

export const incrementCounter = (value) => { 
    return ({ type: counterActions.INC, value });
}

export const decrementCounter = (value) => {
    return ({ type: counterActions.DEC, value });
}
