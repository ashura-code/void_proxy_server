const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/proxy/:name", async (req, res) => {
  try {
    const name = req.params.name;
    const url = `http://98.70.80.28/songs/${name}`;
    const response = await axios.get(url);
    res.send(response.data);
  } catch (error) {
    console.error("Proxy error:", error.message);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});
