import { deleted } from "../actionCreators";

const deletRestaurant = (id) => {
    const url = process.env.NEXT_PUBLIC_APP_API_URL+'';
    
    return async (dispatch) => {
        const response = await fetch(url, {
            method: "delete",
            body: JSON.stringify({
                id
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        const result = await response.json();

        dispatch(deleted(id));
    };
};

export default deletRestaurant;