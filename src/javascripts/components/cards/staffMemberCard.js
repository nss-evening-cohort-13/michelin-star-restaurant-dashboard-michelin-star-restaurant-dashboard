const buildStaffCard = (staffObject) => {
  const domString = `
          <div class="staff-container card-container" id="${staffObject.firebaseKey}">
            <div class="staff-card card" id="${staffObject.firebaseKey}" style="width: 100%; background-image: url(${staffObject.imageUrl});">
              <div class="staff-btn-container card-btn-container">
                <button class="btn btn-danger edit-staff-btn edit-btn" id="${staffObject.firebaseKey}">Edit</button>
                <button class="btn btn-danger delete-staff-btn delete-btn" id="${staffObject.firebaseKey}">Delete</button>
              </div>
            </div>
            <div class="staff-info">
              <h5 class="staff-role">${staffObject.role}</h5>
              <h6 class="staff-name">${staffObject.name}</h6>
            </div>
          </div>`;
  return domString;
};

export default { buildStaffCard };