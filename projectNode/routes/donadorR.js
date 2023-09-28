const express = require("express");
const router = express.Router();
const donadorController = require("../Controladores/donadorController");
router.get("/",donadorController.getAll);
router.get("/:rfc",donadorController.getByRFC);
router.post("/",donadorController.add);
router.delete("/:rfc",donadorController.eliminar);
router.put("/:rfc",donadorController.editar);
module.exports=router;