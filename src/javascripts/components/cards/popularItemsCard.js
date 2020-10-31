import menuItemsData from '../../helpers/data/menuItemsData';
import orderResData from '../../helpers/data/orderReservationData';

const countOccurrences = (arr, val) => arr.reduce((a, current) => (current.menuItemId === val ? a + 1 : a), 0);

const topTenItems = () => new Promise((resolve, reject) => {
  const getMenuItems = menuItemsData.getMenuItems();
  const getJoinTables = orderResData.getAllMenRes();

  Promise.all([getMenuItems, getJoinTables]).then(([menuRes, jtRes]) => {
    const itemsCount = [];
    menuRes.forEach((menuItem) => {
      const timesOrdered = countOccurrences(jtRes, menuItem.id);
      const data = {
        name: menuItem.name,
        count: timesOrdered
      };
      itemsCount.push(data);
    });
    itemsCount.sort((a, b) => b.count - a.count);
    resolve(itemsCount);
  }).catch((error) => reject(error));
});

const popularItems = () => {
  topTenItems().then((res) => {
    if (res.length < 10) {
      for (let i = 0; i < res.length; i += 1) {
        $('#popularItemsList').append(`<li>${res[i].name}</li>`);
      }
    } else {
      for (let i = 0; i < 9; i += 1) {
        $('#popularItemsList').append(`<li>${res[i].name}</li>`);
      }
    }
  });
};

export default { popularItems };
