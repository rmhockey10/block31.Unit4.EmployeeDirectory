//import app from app.js file
import app from "#app";
//define a port constant
const PORT = 3000;
//tell the app to listen on this port and pring something
//to let us know it's up and running
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
