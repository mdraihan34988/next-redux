import { updated } from "../actionCreators";

const updateRestaurant = (restaurant) => {
    const url = process.env.NEXT_PUBLIC_APP_API_URL+'';
    
    return async (dispatch) => {
        const response = await fetch(url, {
            method: "PUT",
            body: JSON.stringify({
                restaurant
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        const result = await response.json();

        dispatch(updated(restaurant));
    };
};

export default updateRestaurant;