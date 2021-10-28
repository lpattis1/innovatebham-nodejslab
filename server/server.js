const path = require("path");
const fs = require("fs");

const chirps = path.join(__dirname, "../chirps.json");

fs.readFile(chirps, (err, data) => {
  if (err) {
    console.log(err);
  }

  const showChirps = JSON.parse(data);
  showChirps.map((chirper) => {
    console.log(
      `User ${chirper.username.toString()} chirped: ${chirper.chirp.toString()}`
    );
  });
});
