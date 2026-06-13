require("dotenv").config({ path: "../.env" });
const mongoose = require("mongoose");
const axios = require("axios");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const dbUrl = process.env.ATLASDB_URL;

async function main() {
  await mongoose.connect(dbUrl);
}

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

const initDB = async () => {
  await Listing.deleteMany({});

  const sampleData = [];

  for (let obj of initData.data) {
    const location = `${obj.location}, ${obj.country}`;

    try {
      const response = await axios.get(
        "https://nominatim.openstreetmap.org/search",
        {
          params: {
            q: location,
            format: "json",
            limit: 1,
          },
          headers: {
            "User-Agent": "Wanderlust",
          },
        },
      );

      let geometry = {
        lat: 0,
        lng: 0,
      };

      if (response.data.length > 0) {
        geometry = {
          lat: parseFloat(response.data[0].lat),
          lng: parseFloat(response.data[0].lon),
        };
      }

      sampleData.push({
        ...obj,
        geometry,
        owner: "6a2da550902cef7bf188abc9",
      });

      console.log(`Added coordinates for ${obj.location}`);

      await new Promise((resolve) => setTimeout(resolve, 1200));
    } catch (err) {
      console.log(`Error for ${obj.location}:`, err.message);

      sampleData.push({
        ...obj,
        geometry: {
          lat: 0,
          lng: 0,
        },
        owner: "6a2da550902cef7bf188abc9",
      });
    }
  }

  await Listing.insertMany(sampleData);

  console.log("data was initialized");
};

initDB();
