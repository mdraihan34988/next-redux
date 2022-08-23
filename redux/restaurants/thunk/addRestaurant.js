import { added } from "../actionCreators";

const addRestaurant = (restaurant) => {
    const url = process.env.NEXT_PUBLIC_APP_API_URL+'';
    
    return async (dispatch) => {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                restaurant
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        const result = await response.json();

        dispatch(added(restaurant));
    };
};

export default addRestaurant;