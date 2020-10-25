const buildOrdersCard = (menuItem) => {
  const domString = `<div class="card order-card" style="width: 18rem;" id="${menuItem.id}">
                      <div class="card-body order-card-body">
                        <h5 class="card-title"><i class="far fa-plus-square"></i> ${menuItem.name}</h5>
                      </div>
                    </div>`;
  return domString;
};

export default { buildOrdersCard };
