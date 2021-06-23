import axios from 'axios';

export default axios.create({
  baseURL: 'http://json-server-d.herokuapp.com/'
});