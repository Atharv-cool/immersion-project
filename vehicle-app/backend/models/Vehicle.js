let vehicles = [];

module.exports = {
  getAll: () => vehicles,
  getById: (id) => vehicles.find(v => v.id === id),
  create: (data) => vehicles.push({ id: Date.now().toString(), ...data }),
  update: (id, data) => {
    const index = vehicles.findIndex(v => v.id === id);
    if (index !== -1) vehicles[index] = { ...vehicles[index], ...data };
  },
  delete: (id) => {
    vehicles = vehicles.filter(v => v.id !== id);
  },
};
