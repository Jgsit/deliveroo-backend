const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      "https://lereacteur-bootcamp-api.herokuapp.com/api/deliveroo/menu/Paris/villemomble-gagny/starsmash-by-amixem-villemomble?day=today&geohash=u09vfh98fpkt&time=ASAP",
      {
        headers: {
          Authorization: `Bearer ${process.env.DELIVEROO_API_KEY}`,
        },
      }
    );
    const data = response.data;
    return res.json(data);
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

// Northflank va nous fournir une variable process.env.PORT
app.listen(process.env.PORT || 3000, () => {
  console.log("Server started");
});
