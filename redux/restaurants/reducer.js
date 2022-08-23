import {
    ADD,
    UPDATE,
    DELETE,
    LOAD
} from "./actionTypes";

import initialState from "./initialState";

const nextId = (restaurants) => {
    const maxId = restaurants.reduce((maxId, restaurant) => Math.max(restaurant.id, maxId), -1);
    return maxId + 1;
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return [
                ...state,
                {
                    id: nextTodoId(state),
                    ... action.payload
                },
            ];

        case DELETE :
            return state.filter((restaurant) => restaurant.id !== action.payload);

        case LOAD :
            return action.payload;

        case UPDATE :
            return state.map((restaurant) => {
                if (restaurant.id !== action.payload.id) {
                    return restaurant;
                }

                return {
                    ...restaurant,
                    ...action.payload
                };
            });

        default:
            return state;
    }
};

export default reducer;