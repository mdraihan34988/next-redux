import {
    ADD,
    UPDATE,
    DELETE,
    LOAD
} from "./actionTypes";

export const added = (restaurant) => {
    return {
        type: ADD,
        payload: restaurant
    };
};

export const deleted = (id) => {
    return {
        type: DELETE,
        payload: id,
    };
};

export const updated = () => {
    return {
        type: UPDATE,
        payload: restaurant
    };
};

export const loaded = (restaurants) => {
    return {
        type: LOAD,
        payload: restaurants
    };
};
