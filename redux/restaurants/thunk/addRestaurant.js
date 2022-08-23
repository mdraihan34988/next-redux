import { added } from "../actionCreators";
import Swal from "sweetalert2";

const addRestaurant = (data) => {
    const url = process.env.NEXT_PUBLIC_APP_API_URL+'/api/restaurents';
    
    return async (dispatch) => {
        const response = await fetch(url, {
            method: "POST",
            body: 
                data
            ,
        });
        const result = await response.json();
        debugger
        Swal.fire(
            'Add Successfully!',
            '',
            'success'
          ).then(()=>{
            window.location.href= '/';         
          })
        dispatch(added(result));
    };
};

export default addRestaurant;