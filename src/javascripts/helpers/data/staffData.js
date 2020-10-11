import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const addStaffMember = (data) => axios
  .post(`${baseUrl}/users.json`, data)
  .then((response) => {
    const update = { firebaseKey: response.data.name };
    axios.patch(`${baseUrl}/users/${response.data.name}.json`, update);
  })
  .catch((error) => console.warn(error));

export default { addStaffMember };
