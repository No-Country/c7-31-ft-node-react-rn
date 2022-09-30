const { app } = require("./app");
const { connectDB } = require("./config/database");






const PORT = 4000;

const startServer = async () => {
  
  await connectDB();

  app.listen(4000, () => {

    console.log("express running on PORT:" + PORT);
  });
};


startServer();



