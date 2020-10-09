const Axios = require("axios");

const api = Axios.create({
    baseURL: "http://cardapioadm.wilkcaetano.com.br/wp-json/wp/v2/",
});

export default  api;