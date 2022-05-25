const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const videos = require("./videos");
const cors = require("cors");

/* The above code is setting up the server. */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/videos", videos);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
