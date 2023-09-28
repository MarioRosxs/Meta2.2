const donador =[
    {
        rfc: "HBX020618A9",
        nombre: "MAR",
        proyecto:"not asig",
        img: "notimg",
    },
    {
        rfc: "FGGS020618A9",
        nombre: "VICG",
        proyecto:"not asig",
        img: "notimg"
    }
]
const findAll = function(){
    return donador;
}
const findByRFC = function(rfc){
    let p = donador.find(e => e.rfc == rfc);
    return p;
}
const addNuevo = function(p){
    donador.push(p)
}
const delet = function(rfc) {
    const index = donador.findIndex(e => e.rfc == rfc);
    if (index !== -1) {
      donador.splice(index, 1);
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