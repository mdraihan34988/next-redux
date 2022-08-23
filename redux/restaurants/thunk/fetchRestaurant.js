import { loaded } from "../actionCreators";

const fetchRestaurants = async (dispatch) => {
    
    const url = process.env.NEXT_PUBLIC_APP_API_URL+'api/restaurents';
    const response = await fetch(url);
    const result = await response.json();
    const Restaurants = result?.data;
    dispatch(loaded(Restaurants));
};

export default fetchRestaurants;
