const express = require("express");
const router = express.Router();
const donatarioController = require("../Controladores/donatarioController");
router.get("/",donatarioController.getAll);
router.get("/:rfc",donatarioController.getByRFC);
router.post("/",donatarioController.add);
router.delete("/:rfc",donatarioController.eliminar);
router.put("/:rfc",donatarioController.editar);
module.exports=router;