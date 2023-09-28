const donador = require("../Modelos/donador");
const getAll = async function(req,res){
    let p = donador.findAll();
    await res.json(p);
}
const getByRFC = async function(req,res){
    await res.json(donador.findByRFC(req.params.rfc));
}
const add = async function(req,res){
    console.log(req.body);
    const newDonador = donador.addNuevo(req.body);
    await res.json(newDonador);
}
const eliminar = async function(req, res) {
    const rfc = req.params.rfc;
    const deleted = donador.delet(rfc);
    if (deleted) {
      await res.json({ message: `Donador con RFC ${rfc} eliminado con éxito.` });
    } else {
      await res.status(404).json({ message: `Donador con RFC ${rfc} no encontrado.` });
    }
  };
  const editar = async function(req, res) {
    const rfc = req.params.rfc;
    const newData = req.body; // Los nuevos datos a aplicar al proyecto
    const edited = proyectos.edit(rfc, newData);
    if (edited) {
      await res.json({ message: `Donatario con RFC ${rfc} editado con éxito.` });
    } else {
      await res.status(404).json({ message: `Donatario con RFC ${rfc} no encontrado.` });
    }
  };

exports.getAll=getAll;
exports.getByRFC=getByRFC;
exports.add=add;
exports.eliminar=eliminar;
exports.editar=editar;