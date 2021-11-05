const express = require("express");
const Router = express.Router();
const axios = require("axios");

Router.post("/", (req, res) => {
  const CODE = req.body.code;

  axios
    .post("https://accounts.spotify.com/api/token", null, {
      headers: {
        Authorization:
          "Basic " +
          new Buffer(
            process.env.CLIENT_ID + ":" + process.env.CLIENT_SECRET
          ).toString("base64"),
      },
      params: {
        code: CODE,
        redirect_uri: "http://localhost:3000",
        grant_type: "authorization_code",
      },
    })
    .then((postRes) => {
      res.json(postRes.data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500);
    });
});

module.exports = Router;
