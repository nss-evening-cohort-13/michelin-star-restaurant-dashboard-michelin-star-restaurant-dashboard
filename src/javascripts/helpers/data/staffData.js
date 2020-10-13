import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllStaff = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/users.json`)
    .then((response) => {
      const allStaff = response.data;
      const staff = [];
      if (allStaff) {
        Object.keys(allStaff).forEach((staffId) => {
          staff.push(allStaff[staffId]);
        });
      }
      resolve(staff);
    })
    .catch((error) => reject(error));
});

const addStaffMember = (data) => axios
  .post(`${baseUrl}/users.json`, data)
  .then((response) => {
    const update = { firebaseKey: response.data.name };
    axios.patch(`${baseUrl}/users/${response.data.name}.json`, update);
  })
  .catch((error) => console.warn(error));

export default { addStaffMember, getAllStaff };
