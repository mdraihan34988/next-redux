import { loaded } from "../actionCreators";

const fetchRestaurants = async (dispatch) => {
    const url = process.env.NEXT_PUBLIC_APP_API_URL+'';
    
    const response = await fetch(url);
    const Restaurants = await response.json();

    dispatch(loaded(Restaurants));
};

export default fetchRestaurants;
