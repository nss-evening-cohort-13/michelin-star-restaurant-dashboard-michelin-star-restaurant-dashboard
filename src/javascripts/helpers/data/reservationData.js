import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllReservations = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/reservations.json`).then((response) => {
    const reservations = response.data;
    const reservationArray = [];
    if (reservations) {
      Object.keys(reservations).forEach((item) => {
        reservationArray.push(reservations[item]);
      });
    }
    resolve(reservationArray);
  }).catch((error) => reject(error));
});

const addReservation = (data) => axios.post(`${baseUrl}/reservations.json`, data).then((response) => {
  // This is just adding the uid to the reservation
  const update = { uid: response.data.name };
  axios.patch(`${baseUrl}/reservations/${response.data.name}.json`, update).catch((error) => console.warn(error));
});

const deleteReservation = (firebaseKey) => axios.delete(`${baseUrl}/reservations/${firebaseKey}.json`);

// Getting single reservation from firebase
const getSingleReservation = (reservationFirebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/reservations/${reservationFirebaseKey}.json`)
    .then((response) => {
      const thisReservation = response.data;
      resolve(thisReservation);
    }).catch((error) => reject(error));
});

// This is updating the reservation data on friebase
const updateReservation = (firebaseKey, data) => axios.patch(`${baseUrl}/reservations/${firebaseKey}.json`, data);

export default {
  addReservation,
  getAllReservations,
  deleteReservation,
  updateReservation,
  getSingleReservation
};
