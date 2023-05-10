import app from "./app.js";
import { PORT } from "./config.js";

//se pone a escuchar el servidor en el puerto x
app.listen(PORT);

console.log('Server running on port', PORT);