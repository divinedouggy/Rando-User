import axios from "axios";


const base_url = "https://api.randomuser.me/"

export const fetchUser = async () => {
 const result = await axios.get(base_url);
 return result

}



