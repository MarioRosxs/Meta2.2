const cors = require("cors");
const express = require("express");
const app = express();
const proyectoRouter = require("./routes/proyectoR");
const donadorRouter = require("./routes/donadorR");
const donatarioRouter = require("./routes/donatarioR.js");
app.use(cors());
app.use(express.json());
app.use("/proyectos",proyectoRouter);
app.use("/donador",donadorRouter);
app.use("/donatario",donatarioRouter);


app.listen(3000, () => {
    console.log("Servidor escuchando por el puerto:", 3000);
  })
  .on("error", err => {
    console.log("Error al iniciar el servidor:", err);
  });
