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
        $('#popularItemsList').append(`<li>${res[i].name} - ${res[i].count} orders</li>`);
      }
    } else {
      for (let i = 0; i < 10; i += 1) {
        $('#popularItemsList').append(`<li>${res[i].name} - ${res[i].count} orders</li>`);
      }
    }
  });
};

const leastPopularItems = () => {
  topTenItems().then((res) => {
    const resSort = res.sort((a, b) => a.count - b.count);

    if (resSort.length < 10) {
      for (let i = 0; i < resSort.length; i += 1) {
        $('#leastPopularList').append(`<li>${resSort[i].name} - ${resSort[i].count} orders</li>`);
      }
    } else {
      for (let i = 0; i < 10; i += 1) {
        $('#leastPopularList').append(`<li>${resSort[i].name} - ${resSort[i].count} orders</li>`);
      }
    }
  });
};

export default { popularItems, leastPopularItems };
