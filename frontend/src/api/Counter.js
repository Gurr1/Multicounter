import axios from 'axios';

const path = (process.env.REACT_APP_BACKEND_URL || "http://localhost:8001");

export function getAllCounters() {
    return [{
        name: "Gurr",
        count: 5
    }]
  /*  return axios.get(path + "/counters")
        .then( (response) => {
            console.log(response.data);
            return response.data;
        })*/
}
