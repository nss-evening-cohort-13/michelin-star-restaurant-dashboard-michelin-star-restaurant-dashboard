import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllTables = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/tables.json`)
    .then((response) => {
      const allTables = response.data;
      const tables = [];
      if (allTables) {
        Object.keys(allTables).forEach((tableId) => {
          tables.push(allTables[tableId]);
        });
      }
      resolve(tables);
    }).catch((error) => reject(error));
});

export default { getAllTables };
