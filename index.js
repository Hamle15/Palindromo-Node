const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/verificar-palindromo", (req, res) => {
  const { palabra } = req.body;

  if (typeof palabra !== "string") {
    return res.status(404).json({ message: "No se pudo comprobar la palabra" });
  }

  const processedPalabra = palabra.toLowerCase().replace(/[^a-z0-9]/g, "");

  const reversedPalabra = processedPalabra.split("").reverse().join("");

  if (processedPalabra === reversedPalabra) {
    return res.status(200).json({ message: `${palabra} es un palíndromo.` });
  } else {
    return res.status(302).json({ message: `${palabra} no es un palíndromo.` });
  }
});

app.listen(port, () => {
  console.log("El servidor está escuchando en el puerto 3000.");
});
