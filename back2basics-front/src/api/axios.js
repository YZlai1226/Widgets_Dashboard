import axios from "axios";

// export default axios.create({
//     baseURL: 'http://localhost:3000'
// })
const myAxios = axios.create({
    baseURL: 'http://localhost:3000'
})

export default myAxios;
