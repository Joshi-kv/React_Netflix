import axios from "axios";
import {baseUrl} from './Constants/constants'

// creating instance for axios
const instance=axios.create({
    baseURL:baseUrl
})

export default instance