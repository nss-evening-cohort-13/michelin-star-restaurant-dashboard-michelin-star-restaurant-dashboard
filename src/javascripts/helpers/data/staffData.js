import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllStaff = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/staff.json`)
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

const getSingleStaffMember = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/staff/${firebaseKey}.json`).then((response) => {
    const thisStaffMember = response.data;
    resolve(thisStaffMember);
  }).catch((error) => reject(error));
});

const addStaffMember = (data) => new Promise((resolve, reject) => {
  axios
    .post(`${baseUrl}/staff.json`, data)
    .then((response) => {
      const update = { firebaseKey: response.data.name };
      axios.patch(`${baseUrl}/staff/${response.data.name}.json`, update)
        .then((patchResponse) => {
          resolve(patchResponse.status);
        });
    })
    .catch((error) => reject(error));
});

const deleteStaffMember = (Uid) => axios.delete(`${baseUrl}/staff/${Uid}.json`);

const updateStaffMember = (firebaseKey, staffObject) => axios.patch(`${baseUrl}/staff/${firebaseKey}.json`, staffObject);

export default {
  addStaffMember,
  getAllStaff,
  getSingleStaffMember,
  deleteStaffMember,
  updateStaffMember
};
