const express = require("express");
const router = express.Router();
const proyectoController = require("../Controladores/proyectoController");
router.get("/",proyectoController.getAll);
router.get("/:id",proyectoController.getById);
router.post("/",proyectoController.add);
router.delete("/:id",proyectoController.eliminar);
router.put("/:id",proyectoController.editar);
module.exports=router;