import * as ratingActionTypes from '../constants/ratingConstants';

 const initialState = [
  ]

const ratingReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case ratingActionTypes.RATING_CLICKED :
        const Todo = state.filter(item => {
               return item.id === payload.id
             });
             const item1 =  !Todo.length ?  [...state, payload]
           :  Todo.map(item => {
            return  {...item, rate:payload.rate}
          })

             return (item1)



        default:
            return state;
    }
};

export default ratingReducer;