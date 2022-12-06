import axios from "axios";

class APIServices {
    /**
     * Get - METHOD WILL CALL GET URL
     * @param {*} url - url passed on the get
     */
    GET(url) {
        return axios.get(url);
    }

    /**
     * POST - METHOD WILL CALL POST API
     * @param {*} url - url that data will be posted on.
     * @param {*} message - message passed on the url.
     * @returns - response from the post api.
     */
    POST(url, message) {
        return axios.post(url, message);
    }

    /**
     * PUT - Updating data to the URL
     * @param {*} url - api url
     * @param {*} message - data that will be updated
     * @returns - response contains status for update
     */
    PUT(url, message) {
        return axios.put(url, message);
    }

    /**
     * DELETE - METHOD WILL DELETE GET URL
     * @param {*} url - url passed on the get
     */
    DELETE(url) {
        return axios.delete(url);
    }

}

export default new APIServices();