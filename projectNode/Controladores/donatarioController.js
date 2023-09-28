const donatario = require("../Modelos/donatario");
const getAll = async function(req,res){
    let p = donatario.findAll();
    await res.json(p);
}
const getByRFC = async function(req,res){
    await res.json(donatario.findByRFC(req.params.rfc));
}
const add = async function(req,res){
    console.log(req.body);
    const newDonatario = donatario.addNuevo(req.body);
    await res.json(newDonatario);
}
const eliminar = async function(req, res) {
    const rfc = req.params.rfc;
    const deleted = donatario.delet(rfc);
    if (deleted) {
      await res.json({ message: `Donatario con RFC ${rfc} eliminado con éxito.` });
    } else {
      await res.status(404).json({ message: `Donatario con RFC ${rfc} no encontrado.` });
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