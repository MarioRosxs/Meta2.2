const proyecto = [
  {
    id: 29301,
    nombre: "Kar",
    desc: "urgente",
    img: "notimg",
    donatario: "Jos",
    donadores: ["dan", "Jov"]
  },
  {
    id: 1466483,
    nombre: "Dan",
    desc: "Donar Sangre",
    img: "notimg",
    donatario: "MaRa",
    donadores: ["Pes", "Dac"]
  }
];

const findAll = function() {
  return proyecto;
};

const findByID = function(id) {
  let p = proyecto.find(e => e.id == id);
  return p;
};

const addNuevo = function(p) {
  proyecto.push(p);
};

const delet = function(id) {
  const index = proyecto.findIndex(e => e.id == id);
  if (index !== -1) {
    proyecto.splice(index, 1);
    return true; // Indica que se eliminó con éxito
  }
  return false; // Indica que no se encontró el ID y no se eliminó nada
};

const edit = function(id, newData) {
  const index = proyecto.findIndex(e => e.id == id);
  if (index !== -1) {
    // Actualizamos el proyecto con los nuevos datos
    proyecto[index] = {
      ...proyecto[index], // Mantenemos los datos existentes
      ...newData // Sobrescribimos con los nuevos datos
    };
    return true; // Indica que se editó con éxito
  }
  return false; // Indica que no se encontró el ID y no se editó nada
};

exports.findAll = findAll;
exports.findByID = findByID;
exports.addNuevo = addNuevo;
exports.delet = delet;
exports.edit = edit;
