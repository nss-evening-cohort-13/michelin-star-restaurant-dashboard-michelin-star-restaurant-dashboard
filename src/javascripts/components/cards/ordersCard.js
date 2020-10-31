const buildOrdersCard = (menuItem) => {
  const domString = `<div class="card order-card" id="${menuItem.id}">
                      <div class="card-body order-card-body">
                        <h5 class="card-title order-card-title"><i class="fas fa-plus"></i><br>${menuItem.name}</h5>
                      </div>
                    </div>`;

  return domString;
};

export default { buildOrdersCard };
