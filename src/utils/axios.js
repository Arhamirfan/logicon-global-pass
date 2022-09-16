import axios from "axios";

const Axios = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export default Axios;

Axios.interceptors.request.use(
  (req) => {
    //add requesting here.
    console.log(req);
    return req;
  },
  (err) => {
    console.log(err);
  }
);

Axios.interceptors.response.use(
  (res) => {
    // Add configurations here
    if (res.status === 201) {
      console.log("Posted Successfully");
    }
    return res.data;
  },
  (err) => {
    console.log(err);
    return Promise.reject(err);
  }
);
