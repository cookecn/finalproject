import axios from "axios";
const BASEURL = "";

export default {
    userLocation: function(query) {
        return axios.get(BASEURL + query);
    },
    searchLocation: function(query) {
        return axios.get(BASEURL + query);
    },
    saveLocation: function(userData) {
        return axios.post("/api/user", userData);
    }
};