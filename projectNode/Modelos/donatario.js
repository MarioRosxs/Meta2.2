const donatario =[
    {
        rfc: "ROAM020618A9",
        nombre: "MAR",
        proyecto:"not asig",
        img: "notimg",
    },
    {
        rfc: "ROAM020925E0",
        nombre: "VICG",
        proyecto:"not asig",
        img: "notimg",
    }
]
const findAll = function(){
    return donatario;
}
const findByRFC = function(rfc){
    let p = donatario.find(e => e.rfc == rfc);
    return p;
}
const addNuevo = function(p){
    donatario.push(p)
}
const delet = function(rfc) {
    const index = donatario.findIndex(e => e.rfc == rfc);
    if (index !== -1) {
      donatario.splice(index, 1);
      return true; // Indica que se eliminó con éxito
    }
    return false; // Indica que no se encontró el ID y no se eliminó nada
  };
  const edit = function(rfc, newData) {
    const index = donatario.findIndex(e => e.rfc == rfc);
    if (index !== -1) {
      // Actualizamos el proyecto con los nuevos datos
      donatario[index] = {
        ...donatario[index], // Mantenemos los datos existentes
        ...newData // Sobrescribimos con los nuevos datos
      };
      return true; // Indica que se editó con éxito
    }
    return false; // Indica que no se encontró el ID y no se editó nada
  };
exports.findAll=findAll;
exports.findByRFC=findByRFC;
exports.addNuevo=addNuevo;
exports.delet=delet;
exports.edit=edit;