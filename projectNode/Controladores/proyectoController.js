const proyectos = require("../Modelos/proyecto");

const getAll = async function(req, res) {
  let p = proyectos.findAll();
  await res.json(p);
};

const getById = async function(req, res) {
  await res.json(proyectos.findByID(req.params.id));
};

const add = async function(req, res) {
  console.log(req.body);
  const newProyect = proyectos.addNuevo(req.body);
  await res.json(newProyect);
};

const eliminar = async function(req, res) {
  const id = req.params.id;
  const deleted = proyectos.delet(id);
  if (deleted) {
    await res.json({ message: `Proyecto con ID ${id} eliminado con éxito.` });
  } else {
    await res.status(404).json({ message: `Proyecto con ID ${id} no encontrado.` });
  }
};

const editar = async function(req, res) {
  const id = req.params.id;
  const newData = req.body; // Los nuevos datos a aplicar al proyecto
  const edited = proyectos.edit(id, newData);
  if (edited) {
    await res.json({ message: `Proyecto con ID ${id} editado con éxito.` });
  } else {
    await res.status(404).json({ message: `Proyecto con ID ${id} no encontrado.` });
  }
};

exports.getAll = getAll;
exports.getById = getById;
exports.add = add;
exports.eliminar = eliminar;
exports.editar = editar;
